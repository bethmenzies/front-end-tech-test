import { And } from "cypress-cucumber-preprocessor/steps"

// test steps
Then('I verify that I am on the darts outrights page', () => {
    cy.location('hash').should('eq', `#/darts/outrights`)
})

And('I verify that there are no events', () => {
    cy.get('.content-loading').should('not.be.visible')
    cy.get('.SportDailyView > .no-results-msg').should('be.visible').should('contain', 'No events or markets presently available. Please check again later.')
})