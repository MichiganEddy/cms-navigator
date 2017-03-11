import { CmsNavPage } from './app.po';

describe('cms-nav App', () => {
  let page: CmsNavPage;

  beforeEach(() => {
    page = new CmsNavPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
