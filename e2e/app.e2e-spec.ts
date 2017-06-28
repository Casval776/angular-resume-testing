import { ResumeTestingPage } from './app.po';

describe('resume-testing App', () => {
  let page: ResumeTestingPage;

  beforeEach(() => {
    page = new ResumeTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
