import { AppPage } from './app.po';

describe('Style test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display headline', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Find A Dog Sitter');
  });
});
