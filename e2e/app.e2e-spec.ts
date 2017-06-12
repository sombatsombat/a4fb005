import { A4fb005Page } from './app.po';

describe('a4fb005 App', () => {
  let page: A4fb005Page;

  beforeEach(() => {
    page = new A4fb005Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
