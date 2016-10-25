export interface Result {
  goalsHomeTeam: number;
  goalsAwayTeam: number;
}

export interface Fixture {
  result: Result;
}

export class Competition {
  fixtures: Fixture[];
}
