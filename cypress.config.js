const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {
      // HTML Reporter
      require('cypress-html-reporter/GenerateReport')(on, config);
      
      // Report Portal
      require('@reportportal/agent-js-cypress/lib/plugin')(on, config);
      
      return config;
    },
  },
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    apiKey: 'testecypress_WazL5x41Tb6KMHiuup17v3omviKWwrIcQWFVut55HeTGt0zP74469VFzypD1cced', // Substitua pela sua API Key
    endpoint: 'https://demo.reportportal.io/api/v1',
    project: 'wisleymiguel_personal',
    launch: 'testes',
    description: 'teste ebac',
    attributes: [
      {
        key: 'ambiente',
        value: 'homologacao'
      }
    ]
  }
});