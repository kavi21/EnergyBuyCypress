// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.add('open', (url) => {
    cy.visit(url)
})
Cypress.Commands.add('Click', (path) => {
    cy.get(path).click()
  })
  Cypress.Commands.add('enter', (path, value) => {
    cy.get(path).clear().type(value)
  })
  Cypress.Commands.add('assertShould', (path,condition) => {
    cy.get(path).should(condition)
  })
  Cypress.Commands.add('assertTextContains', (path, expectedText, condition) => {
    cy.contains(path, expectedText).should(condition)
  })

  Cypress.Commands.add('getText', (path,unitType) => {
    let textVal
    cy.get(path).then(value => {
      textVal = value.text()
      cy.log(textVal)
      // Cypress.env(envName,textVal)
      // cy.wait(10000)
      // Cypress.env(envName,textVal)
      if (unitType == 'Gas')
        cy.task('setGasUnit',textVal)
      else if (unitType == 'Electricity')
        cy.task('setElectricityUnit',textVal)
      else 
        cy.task('setOilUnit',textVal)
    })
  })

  Cypress.Commands.add('getCurrentUrlAndValidate', (condition, value) => {
    cy.url().should(condition,value)
  })