import { CorzaPage } from './app.po';

describe('corza App', function() {
  let page: CorzaPage;

  beforeEach(() => {
    page = new CorzaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
