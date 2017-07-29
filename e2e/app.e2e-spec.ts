import { ChampscheduleClientPage } from './app.po';

describe('champschedule-client App', () => {
  let page: ChampscheduleClientPage;

  beforeEach(() => {
    page = new ChampscheduleClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
