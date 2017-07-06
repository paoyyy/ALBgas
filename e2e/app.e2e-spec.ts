import { ALBgasPage } from './app.po';

describe('albgas App', () => {
  let page: ALBgasPage;

  beforeEach(() => {
    page = new ALBgasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
