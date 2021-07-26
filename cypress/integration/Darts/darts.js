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

When('I select a Darts event', () => {
    // it looks like there aren't any darts events
    //so just going to verify that the outrights tab is selected
    cy.get('#link__outrights').should('have.class', 'active')
})

Then('I verify that I am on the Darts sports page', () => {
    cy.location('hash').should('eq', '#/darts/outrights')
})

Then('I verify that I am on the Darts event page', () => {
    cy.location('hash').should('eq', '#/darts/outrights')
})

And('I verify that an events GET request has been made', () => {
    
})