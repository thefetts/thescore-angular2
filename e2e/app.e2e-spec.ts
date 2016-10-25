import { TheScore } from './app.po';

describe('theScore App', function() {
  let page: TheScore;

  beforeEach(() => {
    page = new TheScore();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('should have a home score', () => {
    page.navigateTo();
    expect(page.getHomeScore()).not.toBe(undefined);
  });

  it('should have an away score', () => {
    page.navigateTo();
    expect(page.getAwayScore()).not.toBe(undefined);
  });
});
