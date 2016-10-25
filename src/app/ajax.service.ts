import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {Competition} from './competition';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AjaxService {
  constructor(private http: Http) {}

  getData(onNext: (competition: Competition) => void) {
    let headers = new Headers({'X-Auth-Token': '2945451223e343ca923612c7993143f7'});
    this.http.get('http://api.football-data.org/v1/competitions/398/fixtures', {headers})
      .map(response => response.json())
      .subscribe(onNext, error => console.log(error));
  }
}
