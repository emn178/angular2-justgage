import { NgCliLibExamplePage } from './app.po';

describe('ng-cli-lib-example App', function() {
  let page: NgCliLibExamplePage;

  beforeEach(() => {
    page = new NgCliLibExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
