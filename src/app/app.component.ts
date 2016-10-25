import {Component} from '@angular/core';
import {AjaxService} from './ajax.service';
import {Competition} from './competition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AjaxService]
})

export class AppComponent {
  title = 'The Score';
  home = 0;
  away = 0;

  constructor(private ajaxService: AjaxService) {
    ajaxService.getData(data => this.calculateScores(data));
  }

  private calculateScores(competition: Competition) {
    this.home = competition.fixtures.reduce((last, next) => last + next.result.goalsHomeTeam, 0);
    this.away = competition.fixtures.reduce((last, next) => last + next.result.goalsAwayTeam, 0);
  }
}
