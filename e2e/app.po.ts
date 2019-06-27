import { browser, element, by } from 'protractor';

export class TemenosPlatformPortalPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root .navbar-brand')).getText();
  }

  clickEnvironmentsNavLink() {
    return element(by.css('app-root .environments-nav-link')).click();
  }

  clickNewEnvironmentButton() {
    return element(by.css('app-root .new-environment-btn')).click();
  }

  keyName() {
    return element(by.css('#environmentName')).sendKeys('test name');
  }

  keyDescription() {
    return element(by.css('#environmentDescription')).sendKeys('test description');
  }

  clickTemplateOption() {
    return element(by.css('#environmentTemplate option'))[1].click();
  }

  clickCreateEnvironment() {
    return element(by.css('app-root .create-environment-btn')).click();
  }

}
