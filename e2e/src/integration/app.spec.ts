import { getGreeting } from '../support/app.po';

describe('dogs', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Buscador de perros');
  });
});
