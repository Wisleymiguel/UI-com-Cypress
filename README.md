# 🤖 UI com Cypress – Testes Automatizados com GitHub Actions

Projeto de automação de **testes de interface (UI)** utilizando o **Cypress**, integrado ao **GitHub Actions** para execução contínua dos testes.  
Desenvolvido como parte dos estudos do curso de **Qualidade de Software (EBAC)**, este projeto demonstra práticas modernas de **CI/CD** aplicadas à automação de testes funcionais.

---

## 🚀 Objetivo
- Automatizar testes de interface de uma aplicação web;
- Validar elementos visuais, formulários e fluxos de navegação;
- Implementar **integração contínua (CI)** com GitHub Actions;
- Garantir qualidade contínua no desenvolvimento e entrega de software.

---

## 🛠️ Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) – Framework de testes end-to-end  
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) – Linguagem principal  
- [Node.js](https://nodejs.org/) – Ambiente de execução  
- [GitHub Actions](https://docs.github.com/actions) – Execução automatizada dos testes (CI/CD)

---

## ⚙️ Como Executar Localmente

1. **Clonar o repositório**
```bash
git clone https://github.com/Wisleymiguel/UI-com-Cypress.git
cd UI-com-Cypress

Instalar as dependências:
npm install

Executar os testes: 
npx cypress open

Estrutura do Projeto:

├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline de integração contínua (GitHub Actions)
├── cypress/
│   ├── e2e/                # Cenários de teste de interface
│   ├── fixtures/           # Dados simulados
│   └── support/            # Comandos e hooks personalizados
├── package.json            # Dependências e scripts
└── README.md



git clone https://github.com/Wisleymiguel/UI-com-Cypress.git
cd UI-com-Cypress
