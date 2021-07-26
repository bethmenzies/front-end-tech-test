import { And} from "cypress-cucumber-preprocessor/steps"

// test steps
And('I verify that a GET event request was made', () => {
    cy.wait('@getEvent').its('response.statusCode').should('eq', 200)
})