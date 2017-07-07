import { MateriaAngular4BoilerplatePage } from './app.po';

describe('materia-angular4-boilerplate App', () => {
  let page: MateriaAngular4BoilerplatePage;

  beforeEach(() => {
    page = new MateriaAngular4BoilerplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
