/// <reference types="cypress" />

export const profilePage = {
  customerName: () => cy.get('.r-erd55g'),
  errorMessage: () => cy.get('[data-testid="warning"]')
};
