const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'vnmrn7',
      e2e: {
        setupNodeEvents(on, config) {
          // implement node event listeners here
          on('file:preprocessor', cucumber())
        },
      specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
      baseUrl: "https://demo.owasp-juice.shop/",
  chromeWebSecurity: false,
  experimentalSessionAndOrigin: true,
  supportFile: 'cypress/support/commands.js',
  pageLoadTimeout: 400000,
  reporter: "cypress-multi-reporters",
  failOnStatusCode: false,
  experimentalStudio: true,
  reporterOptions: {
    configFile: "reporter-config.json"
  },
  retries:{
    runMode:0,
    openMode: 0
  },
  env: {
    first_name: "Sarah",
    webdriveruni_homepage: "https://www.webdriveruniversity.com",
    contactUs: "/Contact-Us/contactus.html"
  }

  },
});
