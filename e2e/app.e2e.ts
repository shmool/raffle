import { RafflePage } from './app.po';

describe('raffle App', function() {
  let page: RafflePage;

  beforeEach(() => {
    page = new RafflePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('raffle works!');
  });
});
