const dotenv = require('dotenv')
dotenv.config();

const ENV = process.env.TEST_ENV || 'dev'
const PROJ = process.env.TEST_PROJ || 'main_app'
const specPattern = `cypress/e2e/${PROJ}/**/*.cy.{js,jsx,ts,tsx}`
console.info(`Tests run on '${ENV}' for project as '${PROJ}'`)
console.log(`specPattern = ${specPattern}`)

const envConfig = require(`./env/${PROJ}/be.${ENV}`)
console.info(`${specPattern}`)

const { defineConfig } = require("cypress");
module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1500,
  viewportHeight: 1000,
  env: envConfig,
  e2e: {
    viewportWidth: 2000,
    viewportHeight: 1500,
    specPattern: specPattern,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
