module.exports = {
  e2e: {
    "baseUrl": "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
        require('cypress-html-reporter/GenerateReport')(on, config)
    },
  },
};

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    apiKey: '<API_KEY>',
    endpoint: 'https://demo.reportportal.io/api/v1',
    project: 'wisleymiguel_personal',
    launch: 'testes',
    description: 'teste ebac',}})