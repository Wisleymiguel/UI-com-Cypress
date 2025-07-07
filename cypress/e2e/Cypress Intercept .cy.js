/// <reference types="cypress" />
const { email, senha } = require('../fixtures/data.json');
const { homePage } = require('../support/pages/home.page');

describe('', () => {

before(() => {
  
  cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'});
  cy.visit('/');
  
});

beforeEach(() => {
cy.login(email, senha);
 
});

it('categories', () => {
  cy.intercept('GET','**/public/getCategories',{ fixture: 'categories.json' });
  homePage.openSearchProduct();
  homePage.openCategoriesFilter();
  homePage.categories().should('have.length.greaterThan', 1);
});


it('Nocategories', () => {
  cy.intercept('GET','**/public/getCategories',{ fixture: 'Nocategories.json' });
  homePage.openSearchProduct();
  homePage.openCategoriesFilter();
  homePage.categories().should('have.length.greaterThan', 0);
});
 
});

