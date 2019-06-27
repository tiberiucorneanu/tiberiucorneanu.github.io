import { TemenosPlatformPortalPage } from './app.po';

describe('temenos-platform-portal App', () => {
  let page: TemenosPlatformPortalPage;

  beforeEach(() => {
    page = new TemenosPlatformPortalPage();
  });

  it('should display title saying Temenos Cloud', () => {
    page.navigateTo();
    expect<any>(page.getTitleText()).toEqual('Temenos Cloud');
  });

  /*it('should be able to create an environment', () => {
    page.navigateTo();
    page.clickEnvironmentsNavLink();
    page.clickNewEnvironmentButton();
    page.keyName();
    page.keyDescription();
    page.clickTemplateOption();
    page.clickCreateEnvironment();
  })*/

});
