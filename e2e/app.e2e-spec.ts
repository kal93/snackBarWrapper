import { SnackBarWrapperPage } from './app.po';

describe('snack-bar-wrapper App', () => {
  let page: SnackBarWrapperPage;

  beforeEach(() => {
    page = new SnackBarWrapperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
