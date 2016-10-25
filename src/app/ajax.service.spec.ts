import {TestBed, inject} from '@angular/core/testing';
import {AjaxService} from './ajax.service';
import {DATA} from './mock-scores';
import {Http, Response, ResponseOptions, BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {NgModule} from '@angular/core';

@NgModule({})
class TestHttpModule {
  static forTesting(service) {
    return {
      providers: [
        service,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    };
  }
}

describe('AjaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(TestHttpModule.forTesting(AjaxService));
  });

  describe('#get', () => {
    it('returns data', inject([MockBackend, AjaxService], (backend, service) => {
      backend.connections.subscribe(conn => {
        conn.mockRespond(new Response(new ResponseOptions({body: DATA})));
        expect(conn.request.url).toEqual('http://api.football-data.org/v1/competitions/398/fixtures');
        expect(conn.request.headers.get('X-Auth-Token')).toEqual('2945451223e343ca923612c7993143f7');
      });

      service.getData(competition => expect(competition).toBe(DATA));
    }));
  });
});
