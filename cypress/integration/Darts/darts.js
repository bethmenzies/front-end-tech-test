import { And, Given , Then , When} from "cypress-cucumber-preprocessor/steps"

// test steps
Given('I am on the {string} page', (page) => {
    if (page === 'home') {
        page = ''
    }
    cy.visit(`/#/${page}`)
})

When('I select the Darts sports page', () => {
    cy.get('#showExtendedMenu').click()
    cy.get('#extendedMenu__link__darts').click()
})

When('I select the calendar', () => {
    cy.get('#link__daily > a').click()
})

Then('I verify that I am on the Darts sports page', () => {
    cy.location('hash').should('eq', '#/darts/outrights')
})

Then('I verify that I am on the Darts calendar page', () => {
    cy.location('hash').should('eq', '#/darts/outrights')
})

And('I verify that there are no events', () => {
    cy.get('.SportDailyView > .no-results-msg').should('be.visible').should('contain', 'No events or markets presently available. Please check again later.')
})