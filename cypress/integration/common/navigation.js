import { Given , Then , When} from "cypress-cucumber-preprocessor/steps"

// test steps
Given('I am on the {string} page', (page) => {
    if (page === 'home') {
        page = ''
    }
    cy.visit(`/#/${page}`)
})

When('I select the {string} sports page', (sport) => {
    cy.get('#showExtendedMenu').click()
    cy.get(`#extendedMenu__link__${sport}`).click()
})

When('I select the calendar', () => {
    cy.get('#link__daily > a').click()
})

When('I click on {string} day', (day) => {
    cy.contains(`${day}`).click()
})

Then('I verify that I am on the {string} sports page', (sport) => {
    cy.location('hash').should('eq', `#/${sport}/daily`)
})

Then('I verify that I am on the {string} calendar page', (sport) => {
    cy.location('hash').should('eq', `#/${sport}/daily`)
})