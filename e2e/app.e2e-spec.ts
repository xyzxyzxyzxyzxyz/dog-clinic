import { DogClinicPage } from './app.po';

describe('dog-clinic App', () => {
  let page: DogClinicPage;

  beforeEach(() => {
    page = new DogClinicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
