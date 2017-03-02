import { Materia2ServicePage } from './app.po';

describe('materia2-service App', () => {
  let page: Materia2ServicePage;

  beforeEach(() => {
    page = new Materia2ServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
