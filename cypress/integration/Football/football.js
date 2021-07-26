import { And, Then , When} from "cypress-cucumber-preprocessor/steps"

// test steps
When('I click on the first event', () => {
    cy.intercept('GET', '/sportsbook/v1/api/getEvent*').as('getEvent')
    cy.get('[id^=event-schedule-market-]:first').within(() => {
        cy.get('.selection').click()
    })
})

Then('I verify that there are events', () => {
    cy.get('.content-loading').should('not.be.visible')
    cy.get('[id^=event-schedule-market-]').its('length').should('be.gte', 1)
})

Then('I verify that I am on the event page', () => {
    cy.location('hash').should('contain', '#/soccer/daily/event/')
})

And('I verify that a GET event request was made', () => {
    cy.wait('@getEvent').its('response.statusCode').should('eq', 200)
})