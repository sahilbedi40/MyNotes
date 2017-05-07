import { FeedsPage } from './app.po';

describe('feeds App', function() {
  let page: FeedsPage;

  beforeEach(() => {
    page = new FeedsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
