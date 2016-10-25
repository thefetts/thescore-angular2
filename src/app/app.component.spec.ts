import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AjaxService} from './ajax.service';
import {DATA} from './mock-scores';

describe('App: TheScore', () => {
  let app;
  let compiled;

  beforeEach(() => {
    const service = {
      getData(onNext) {
        onNext(DATA);
      }
    };

    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });

    TestBed.overrideComponent(AppComponent, {
      set: {
        providers: [{provide: AjaxService, useValue: service}]
      }
    });

    let fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'The Score'`, () => {
    expect(app.title).toEqual('The Score');
  });

  it('should render title in a h1 tag', () => {
    expect(compiled.querySelector('h1').textContent).toContain('The Score');
  });

  it('should calculate the home score', () => {
    expect(app.home).toEqual(30);
  });

  it('should calculate the away score', () => {
    expect(app.away).toEqual(32);
  });
});
