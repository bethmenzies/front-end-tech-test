import { Given , Then , When} from "cypress-cucumber-preprocessor/steps"

// test steps
Given('I am on the home page', () => {
    cy.visit('/')
})

When('I select the Darts sports page', () => {
    cy.get('#showExtendedMenu').click()
    cy.get('#extendedMenu__link__darts').click()
})

Then('I verify that I am on the Darts sports page', () => {
    cy.location('hash').should('eq', '#/darts/outrights')
})