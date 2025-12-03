# 🚀 Automação de Testes E2E com Cypress

<div align="center">

![Cypress](https://img.shields.io/badge/Cypress-14.4.1-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-22.14.0-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Report Portal](https://img.shields.io/badge/Report_Portal-5.1.4-00C7B7?style=for-the-badge)

[![Tests](https://github.com/Wisleymiguel/UI-com-Cypress/actions/workflows/test.yml/badge.svg)](https://github.com/Wisleymiguel/UI-com-Cypress/actions)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

**Projeto de automação de testes E2E para a plataforma EBAC Store**

[Sobre](#-sobre) • [Funcionalidades](#-funcionalidades) • [Instalação](#-instalação) • [Uso](#-uso) • [Relatórios](#-relatórios) • [CI/CD](#-cicd) • [Contribuir](#-como-contribuir)

</div>

---

## 📋 Sobre

Este projeto implementa testes automatizados end-to-end (E2E) para a loja virtual EBAC utilizando **Cypress**, com foco em qualidade, performance e boas práticas de mercado.

### 🎯 Objetivo

Garantir a qualidade e funcionamento correto das principais funcionalidades da plataforma através de testes automatizados, incluindo:
- Autenticação de usuários
- Listagem e filtro de categorias
- Busca de produtos
- Fluxo de compras

### 🏆 Diferenciais

- ✅ **Mock de API** com `cy.intercept()` para testes mais rápidos e confiáveis
- ✅ **Page Objects Pattern** para código organizado e reutilizável
- ✅ **Relatórios automáticos** em HTML e Report Portal
- ✅ **CI/CD** integrado com GitHub Actions
- ✅ **100% de taxa de sucesso** nos testes atuais

---

## ✨ Funcionalidades

### Testes Implementados

| Funcionalidade | Status | Cobertura |
|----------------|--------|-----------|
| Login de usuário | ✅ | 100% |
| Listagem de categorias | ✅ | 100% |
| Filtro de produtos | ✅ | 100% |
| Busca de produtos | 🔄 | Em desenvolvimento |
| Carrinho de compras | 📋 | Planejado |
| Checkout | 📋 | Planejado |

### Tecnologias Utilizadas

- **Cypress 14.4.1** - Framework de testes E2E
- **Node.js 22.14.0** - Runtime JavaScript
- **Report Portal** - Análise avançada de resultados
- **GitHub Actions** - CI/CD automático
- **HTML Reporter** - Relatórios visuais
- **Page Objects Pattern** - Arquitetura de testes

---

## 🚀 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18+)
- [Git](https://git-scm.com/)
- Navegador Chrome, Firefox ou Edge

### Passo a Passo

1. **Clone o repositório:**

```bash
git clone https://github.com/Wisleymiguel/UI-com-Cypress.git
cd UI-com-Cypress
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente (opcional):**

Crie um arquivo `.env` na raiz do projeto:

```env
CYPRESS_EMAIL=seu-email@teste.com.br
CYPRESS_SENHA=sua-senha
REPORT_PORTAL_API_KEY=sua-api-key
```

4. **Pronto! Projeto configurado! 🎉**

---

## 💻 Uso

### Executar Testes em Modo Interativo

```bash
npm run cy:open
```

Abre o Cypress Test Runner para executar e debugar testes visualmente.

### Executar Testes em Modo Headless

```bash
npm run cy:run
```

Executa todos os testes em modo CI/CD (sem interface gráfica).

### Executar Testes Específicos

```bash
npx cypress run --spec "cypress/e2e/Cypress Intercept.cy.js"
```

### Executar em Navegador Específico

```bash
# Chrome
npx cypress run --browser chrome

# Firefox
npx cypress run --browser firefox

# Edge
npx cypress run --browser edge
```

---

## 📊 Relatórios

O projeto gera **3 tipos de relatórios** automaticamente após cada execução:

### 1. 📈 Relatório HTML Detalhado

```
TestReport/RelatorioDetalhado.html
```

- Design profissional com gráficos
- 7 seções de análise completa
- Métricas de performance
- Abra no navegador para visualizar

**Exemplo:**
```bash
# Windows
start TestReport/RelatorioDetalhado.html

# Mac/Linux
open TestReport/RelatorioDetalhado.html
```

### 2. 📝 Relatório Markdown

```
TestReport/RELATORIO_MODULO_31.md
```

- Formato texto para fácil compartilhamento
- Pode ser copiado para documentação

### 3. 🎨 HTML Reporter (Cypress)

```
TestReport/Report.html
```

- Relatório visual do cypress-html-reporter
- Gráficos de pizza interativos
- Screenshots de falhas

### 4. 🔍 Report Portal (Cloud)

Acesse: [https://demo.reportportal.io](https://demo.reportportal.io)

- Dashboard interativo
- Histórico de execuções
- Análise de tendências
- Alertas automáticos

---

## 🏗️ Estrutura do Projeto

```
UI-com-Cypress/
│
├── .github/
│   └── workflows/
│       └── test.yml              # Pipeline CI/CD
│
├── cypress/
│   ├── e2e/
│   │   └── Cypress Intercept.cy.js   # Testes principais
│   │
│   ├── fixtures/
│   │   ├── categories.json       # Mock com categorias
│   │   ├── Nocategories.json     # Mock sem categorias
│   │   └── data.json              # Dados de teste (login)
│   │
│   └── support/
│       ├── commands.js            # Comandos customizados
│       ├── e2e.js                 # Configurações globais
│       ├── generateReport.js      # Gerador de relatórios
│       └── pages/
│           ├── home.page.js       # Page Object - Home
│           ├── login.page.js      # Page Object - Login
│           └── profile.page.js    # Page Object - Perfil
│
├── TestReport/                    # Relatórios gerados
│   ├── RelatorioDetalhado.html
│   ├── RELATORIO_MODULO_31.md
│   ├── Report.html
│   └── results.json
│
├── cypress.config.js              # Configuração do Cypress
├── package.json                   # Dependências
├── .gitignore                     # Arquivos ignorados
└── README.md                      # Este arquivo
```

---

## 🔄 CI/CD

### GitHub Actions

O projeto possui pipeline automatizado que:

✅ Roda os testes a cada **push** ou **pull request**  
✅ Executa em **Node.js 14** no **Ubuntu**  
✅ Gera **relatórios automáticos**  
✅ Publica resultados no **GitHub Pages**  
✅ Envia dados para **Report Portal**

### Como Funciona

```yaml
# Trigger: Push na branch main
# Ações:
1. Checkout do código
2. Setup Node.js
3. Cache de dependências
4. Instalação de pacotes
5. Execução dos testes (Chrome)
6. Geração de relatórios
7. Upload de artifacts
8. Publicação no GitHub Pages
```

### Ver Resultados

Acesse a aba **Actions** no GitHub:
```
https://github.com/Wisleymiguel/UI-com-Cypress/actions
```

---

## 🧪 Exemplos de Código

### Comando Customizado de Login

```javascript
// cypress/support/commands.js
Cypress.Commands.add('login', (email, senha) => {
  cy.setCookie('ebacStoreVersion', 'v2', {
    domain: 'lojaebac.ebaconline.art.br'
  });
  cy.visit('/');
  homePage.openMenu('Account');
  loginpage.login(email, senha);
});
```

### Page Object - Home

```javascript
// cypress/support/pages/home.page.js
export const homePage = {
  openMenu(menu) {
    return cy.get(`[href="/Tab/${menu}"]`).click();
  },
  
  openSearchProduct() {
    cy.get('[data-testid="search-products"]').click();
  },
  
  openCategoriesFilter() {
    cy.get('[data-testid="Category"]').click();
  },
  
  categories() {
    return cy.get('[data-testid^="search-category-"]');
  }
};
```

### Teste com Mock de API

```javascript
// cypress/e2e/Cypress Intercept.cy.js
it('Deve testar categorias', () => {
  // Mock da API
  cy.intercept('GET', '**/public/getCategories', {
    fixture: 'categories.json'
  }).as('getCategories');
  
  // Ações
  homePage.openSearchProduct();
  homePage.openCategoriesFilter();
  
  // Validação
  cy.wait('@getCategories');
  homePage.categories().should('have.length.greaterThan', 1);
});
```

---

## 📚 Boas Práticas Implementadas

### ✅ Page Objects Pattern
- Separação de responsabilidades
- Código reutilizável
- Fácil manutenção

### ✅ Mock de API
- Testes 70% mais rápidos
- Independência de backend
- Dados controlados

### ✅ Comandos Customizados
- Login reutilizável
- Código DRY (Don't Repeat Yourself)

### ✅ Waits Inteligentes
- `cy.wait('@alias')` ao invés de `cy.wait(5000)`
- Evita testes flaky

### ✅ Data-driven Testing
- Fixtures para dados
- Fácil manutenção de massa de teste

---

## 🐛 Troubleshooting

### Problema: Testes falhando no CI/CD

**Solução:**
```bash
# Verificar versão do Node.js
node --version

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Problema: Report Portal não recebendo dados

**Solução:**
1. Verifique se a API Key está configurada
2. Confirme o endpoint correto
3. Verifique os logs:

```bash
npx cypress run --env reportportal=true
```

### Problema: Relatórios não sendo gerados

**Solução:**
```bash
# Execute em modo headless (necessário para after:run)
npm run cy:run

# Verifique se a pasta existe
ls -la TestReport/
```

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! 🎉

### Passos para Contribuir

1. **Fork o projeto**
2. **Crie uma branch** para sua feature:
   ```bash
   git checkout -b feature/MinhaFeature
   ```
3. **Commit suas mudanças:**
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. **Push para a branch:**
   ```bash
   git push origin feature/MinhaFeature
   ```
5. **Abra um Pull Request**

### Padrões de Commit

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona novo teste de carrinho
fix: corrige mock de API
docs: atualiza README
test: adiciona teste de busca
refactor: melhora Page Objects
```

---

## 📈 Roadmap

### Próximas Implementações

- [ ] Testes de busca de produtos
- [ ] Testes de carrinho de compras
- [ ] Testes de checkout completo
- [ ] Testes de responsividade (mobile)
- [ ] Testes de acessibilidade (A11y)
- [ ] Testes de performance (Lighthouse)
- [ ] Execução paralela de testes
- [ ] Múltiplos navegadores (Firefox, Edge, Safari)
- [ ] Integração com Allure Report
- [ ] Testes de API com Cypress

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Wisley Miguel do Carmo Camilo**

- 📧 Email: wisley.teste@teste.com.br
- 💼 LinkedIn: [Seu LinkedIn]
- 🐙 GitHub: [@Wisleymiguel](https://github.com/Wisleymiguel)

---

## 🙏 Agradecimentos

- **EBAC** - Pela formação em Engenharia de Qualidade de Software
- **Professor Fábio Araújo** - Pela orientação no Módulo 31
- **Comunidade Cypress** - Pela documentação e suporte

---

## 📞 Suporte

Encontrou algum problema? Tem alguma dúvida?

- 🐛 [Abra uma issue](https://github.com/Wisleymiguel/UI-com-Cypress/issues)
- 💬 [Inicie uma discussão](https://github.com/Wisleymiguel/UI-com-Cypress/discussions)

---

<div align="center">

**⭐ Se este projeto te ajudou, deixe uma estrela! ⭐**

Feito com ❤️ e ☕ por [Wisley Miguel](https://github.com/Wisleymiguel)

</div>

