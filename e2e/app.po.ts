import { browser, element, by } from 'protractor';

export class TheScore {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getHomeScore() {
    return element(by.css('#home')).getText();
  }

  getAwayScore() {
    return element(by.css('#away')).getText();
  }
}
