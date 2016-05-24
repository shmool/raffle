export class RafflePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('raffle-app h1')).getText();
  }
}
