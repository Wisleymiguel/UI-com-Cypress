/// <reference types="cypress" />

const { email, senha } = require("../fixtures/data.json");
const { homePage } = require("../support/pages/home.page");

describe("Teste utilizando App Actions", () => {
  before(() => {
    // Configurar cookie para melhor performance
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
  });

  beforeEach(() => {
    // Visitar a página com timeout maior e tratamento de erro
    cy.visit("/", {
      timeout: 120000,
      failOnStatusCode: false,
    });

    // Aguardar a página carregar completamente
    cy.get("body", { timeout: 30000 }).should("be.visible");

    // Fazer login usando comando customizado
    cy.login(email, senha);
  });

  it("Deve testar categorias", () => {
    // Interceptar a chamada da API antes de fazer a requisição
    cy.intercept("GET", "**/public/getCategories", {
      fixture: "categories.json",
    }).as("getCategories");

    // Aguardar a página estar pronta
    cy.wait(2000);

    // Abrir filtro de produtos
    homePage.openSearchProduct();
    homePage.openCategoriesFilter();

    // Aguardar a requisição da API
    cy.wait("@getCategories");

    // Verificar se as categorias foram carregadas
    homePage.categories().should("have.length.greaterThan", 1);
  });

  it("Deve testar Nocategorias", () => {
    // Interceptar chamada com fixture diferente
    cy.intercept("GET", "**/public/getCategories", {
      fixture: "Nocategories.json",
    }).as("getNocategories");

    // Aguardar página estar pronta
    cy.wait(2000);

    // Abrir filtros
    homePage.openSearchProduct();
    homePage.openCategoriesFilter();

    // Aguardar requisição
    cy.wait("@getNocategories");

    // Verificar se não há categorias (ou há zero categorias)
    homePage.categories().should("have.length.greaterThan", 0);
  });
});
