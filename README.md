# 🛒 EBAC Shop - Testes E2E com Cypress

Projeto de automação de testes End-to-End (E2E) para a plataforma de e-commerce EBAC Shop, utilizando Cypress com Page Objects, Intercept para mocking de APIs e CI/CD integrado via GitHub Actions.

![Cypress](https://img.shields.io/badge/Cypress-14.4.1-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-14+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## 📋 Sobre o Projeto

Este repositório contém uma suíte de testes automatizados E2E para validar funcionalidades da loja virtual EBAC Shop, demonstrando boas práticas de automação como:

- **Page Object Model (POM)** - Organização e reutilização de código
- **Cypress Intercept** - Mocking de respostas de API para testes isolados
- **Custom Commands** - Comandos personalizados para ações repetitivas
- **CI/CD Pipeline** - Execução automatizada com GitHub Actions
- **Relatórios HTML** - Geração automática de relatórios de execução

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| Cypress | 14.4.1 | Framework de testes E2E |
| Node.js | 14+ | Runtime JavaScript |
| GitHub Actions | - | CI/CD Pipeline |
| Docker | - | Containerização |
| cypress-html-reporter | 11.0.0 | Geração de relatórios |

## 📁 Estrutura do Projeto

```
├── .github/
│   └── workflows/
│       └── test.yml              # Pipeline CI/CD
├── cypress/
│   ├── e2e/
│   │   └── Cypress Intercept.cy.js   # Testes E2E
│   ├── fixtures/
│   │   ├── categories.json       # Mock de categorias
│   │   ├── Nocategories.json     # Mock sem categorias
│   │   └── data.json             # Dados de teste
│   └── support/
│       ├── commands.js           # Comandos customizados
│       ├── e2e.js                # Configuração global
│       └── pages/
│           ├── home.page.js      # Page Object - Home
│           ├── login.page.js     # Page Object - Login
│           └── profile.page.js   # Page Object - Profile
├── TestReport/
│   ├── Report.html               # Relatório de execução
│   └── results.json              # Resultados em JSON
├── cypress.config.js             # Configuração do Cypress
├── Dockerfile                    # Imagem Docker
├── package.json                  # Dependências
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/ebac-cypress-intercept.git
cd ebac-cypress-intercept
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute os testes

**Modo Headless (terminal):**
```bash
npm test
# ou
npm run cy:run
```

**Modo Interativo (GUI):**
```bash
npm run cy:open
```

### 4. Executar com Docker

```bash
docker build -t ebac-cypress .
docker run ebac-cypress
```

## 🧪 Cenários de Teste

### Cypress Intercept - App Actions

| Cenário | Descrição | Status |
|---------|-----------|--------|
| Deve testar categorias | Valida carregamento de categorias mockadas | ✅ |
| Deve testar Nocategorias | Valida comportamento sem categorias | ✅ |

## 🎯 Funcionalidades Demonstradas

### 1. Cypress Intercept (Mocking de API)

```javascript
cy.intercept("GET", "**/public/getCategories", {
  fixture: "categories.json",
}).as("getCategories");

cy.wait("@getCategories");
```

### 2. Custom Commands

```javascript
// cypress/support/commands.js
Cypress.Commands.add('login', (email, senha) => { 
  cy.setCookie('ebacStoreVersion', 'v2');
  cy.visit('/');
  homePage.openMenu('Account');
  loginpage.login(email, senha);
});
```

### 3. Page Object Model

```javascript
// cypress/support/pages/home.page.js
export const homePage = {
  openSearchProduct() {
    cy.get('[data-testid="search-products"]').click();
  },
  categories() {
    return cy.get('[data-testid^="search-category-"]');
  }
};
```

## ⚙️ CI/CD Pipeline

O projeto possui integração contínua configurada com GitHub Actions que:

1. ✅ Executa os testes automaticamente em push/PR na branch `main`
2. ✅ Gera relatórios HTML de execução
3. ✅ Faz upload de artefatos (screenshots, vídeos, relatórios)
4. ✅ Publica relatório no GitHub Pages

### Executar Pipeline Manualmente

O workflow pode ser disparado manualmente via `workflow_dispatch` na aba Actions do GitHub.

## 📊 Relatórios

Após a execução, os relatórios são gerados em `TestReport/`:

- **Report.html** - Relatório visual com gráficos
- **results.json** - Dados brutos da execução

### Métricas da Última Execução

| Métrica | Valor |
|---------|-------|
| Total de Testes | 2 |
| Passou | 2 (100%) |
| Falhou | 0 |
| Tempo de Execução | 12 segundos |

## 📚 Referências

- [Documentação Oficial do Cypress](https://docs.cypress.io/)
- [Cypress Intercept](https://docs.cypress.io/api/commands/intercept)
- [Page Object Model](https://docs.cypress.io/guides/references/best-practices)
- [GitHub Actions para Cypress](https://github.com/cypress-io/github-action)

## 👨‍💻 Autor

**Wisley Borges**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wisleyborges)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wisleyborges)

---

## 📄 Licença

Este projeto é de uso educacional, desenvolvido como parte do curso de Quality Assurance da EBAC.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
