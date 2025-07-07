module.exports = {
  e2e: {
    "baseUrl": "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
        require('cypress-html-reporter/GenerateReport')(on, config)
    },
  },
};
