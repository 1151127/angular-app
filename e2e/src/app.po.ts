import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.welcomeHome')).getText() as Promise<string>;
  }

  getButtonName(path: string) {
    return element(by.xpath(path)).getText() as Promise<string>;
  }

  getUrlPage(){
    return browser.getCurrentUrl();
  }

  clickButton(path: string){
    element(by.xpath(path)).click();
  }

  getLabelName(path: string,pathElement: string) {
    element(by.xpath(path)).click();
    return element(by.xpath(pathElement)).getText() as Promise<string>;
  }

  getElement(path: string){
    element(by.xpath(path));
  }

  getPage(path: string){
    return browser.get(path) as Promise<any>;
  }

}
