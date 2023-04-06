const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { 
        setGasUnit: (textVal) => {
          return (value=textVal)
        },
        getGasUnit: () => {
          return value
        },
        setElectricityUnit: (textVal) => {
          return (value=textVal)
        },
        getElectricityUnit: () => {
          return value
        },
        setOilUnit: (textVal) => {
          return (value=textVal)
        },
        getOilUnit: () => {
          return value
        },
      })
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: 'https://ensekautomationcandidatetest.azurewebsites.net/'
  },
  video : false,
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "screenshotOnRunFailure": true,
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports/mocha",
      "quite": true,
      "overwrite": false,
      "html": true,
      "json": true
    }
  }
});
