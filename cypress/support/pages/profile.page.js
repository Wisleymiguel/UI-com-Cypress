/// <reference types="cypress" />
export const profilePage ={

    customerName:()=>{return cy.get('.r-erd55g') }
}
export const profilePage1 ={

    customerName:()=>{return cy.get('[data-testid="warning"]')}
}

export const profilePage2 ={
    customerName:()=>{ return cy.get('[data-testid="warning"]')}
}


export const profilePage3 ={
    customerName:()=>{ return cy.get('[data-testid="warning"]')}
}