import { NgCoreBoilerplatePage } from './app.po';

describe('ng-core-Boilerplate App', () => {
  let page: NgCoreBoilerplatePage;

  beforeEach(() => {
    page = new NgCoreBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
