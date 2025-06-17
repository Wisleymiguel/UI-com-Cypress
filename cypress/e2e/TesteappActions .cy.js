/// <reference types="cypress" />
const { email, senha } = require('../fixtures/data.json');
const { homePage } = require('../support/pages/home.page');
const { profilePage } = require('../support/pages/profile.page');

describe('Teste utilizando App Actions', () => {
  it('Deve fazer o login com sucesso', () => {
    cy.login(email, senha);
    profilePage.customerName().should('contain', 'wisley');
     homePage.openMenu('Account');
  });

it('Deve fazer login com senha incorreta', () => {
    cy.login(email, 'senha invalida');
    profilePage.errorMessage().should('contain', 'Password is incorrect');
  });



  it('Deve fazer login com email incorreto', () => {
    cy.login('email invalido', senha);
    profilePage.errorMessage().should('contain', 'Enter a valid email address');
  });

 it('Deve fazer login com ambos incorretos', () => {
    cy.login('email invalido', 'senha invalida');
    profilePage.errorMessage().should('contain', 'Enter a valid email address');
  });

});

