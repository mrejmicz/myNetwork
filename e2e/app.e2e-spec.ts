import { MyNetworkPage } from './app.po';

describe('my-network App', () => {
  let page: MyNetworkPage;

  beforeEach(() => {
    page = new MyNetworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
