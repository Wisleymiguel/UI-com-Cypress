/// <reference types="cypress" />
const { homePage } = require('../support/pages/home.page');
const loginpage = require('../support/pages/login.page');
const { email, senha } = require('../fixtures/data.json');
const { profilePage, profilePage1,profilePage2,profilePage3 } = require('../support/pages/profile.page');

describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', {
      domain: 'lojaebac.ebaconline.art.br'
    });
    cy.visit('/');
  });

  it('deve fazer o login com sucesso', () => {
    homePage.openMenu('Account');
    loginpage.login(email, senha)
    homePage.openMenu('Account');
    profilePage.customerName().should('contain','wisley')
  });
  it('Deve fazer login um email correto ', () => {
    homePage.openMenu('Account');
    loginpage.login(email, 'senha invalida ')
    profilePage1.customerName().should('contain','Password is incorrect')
  });

  it('Deve fazer login com senha correta', () => {
    homePage.openMenu('Account');
    loginpage.login('email invalido',senha)
    profilePage2.customerName().should('contain','Enter a valid email address')
    
  });

  it('Deve fazer login com ambos incorreto', () => {
    homePage.openMenu('Account');
    loginpage.login('email invalido','login invalido')
    profilePage3.customerName().should('contain','Enter a valid email address')
  });

});
