import { Given , Then , When} from "cypress-cucumber-preprocessor/steps"

// test steps
Given('I am on the {string} page', (page) => {
    if (page === 'home') {
        page = ''
    }
    cy.visit(`/#/${page}`)
})

Given('I am on the {string} calendar page', (sport) => {
    cy.visit(`/#/${sport}/daily`)
})

When('I select the {string} sports page', (sport) => {
    cy.get('.content-loading').should('not.be.visible')
    cy.get('#showExtendedMenu').click()
    cy.get(`#extendedMenu__link__${sport}`).click()
})

When('I select the calendar', () => {
    cy.get('.content-loading').should('not.be.visible')
    cy.get('#link__daily > a').click()
})

When('I click on {string} day', (day) => {
    cy.get('.content-loading').should('not.be.visible')
    cy.contains(`${day}`).click()
})

When('I click on the first event', () => {
    cy.intercept('GET', '/sportsbook/v1/api/getEvent*').as('getEvent')
    cy.get('.content-loading').should('not.be.visible')
    cy.get('[id^=event-schedule-market-]:first').within(() => {
        cy.get('.textLink').click()
    })
})

Then('I verify that I am on the {string} sports page', (sport) => {
    cy.location('hash').should('eq', `#/${sport}/daily`)
})

Then('I verify that I am on the {string} calendar page', (sport) => {
    cy.location('hash').should('eq', `#/${sport}/daily`)
})

Then('I verify that there are events', () => {
    cy.get('.content-loading').should('not.be.visible')
    cy.get('[id^=event-schedule-market-]').its('length').should('be.gte', 1)
})

Then('I verify that I am on the {string} event page', (sport) => {
    cy.location('hash').should('contain', `#/${sport}/daily/event/`)
})