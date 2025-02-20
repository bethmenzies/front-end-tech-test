import { When, Then } from "cypress-cucumber-preprocessor/steps"

// test steps
When('I click on an {string}', (outcome) => {
    cy.get('.content-loading').should('not.be.visible')
    cy.contains(outcome).parent().next().within(() => {
        cy.get('.market-price').first().click()
    })
})

Then('that {string} is added to the betslip', (outcome) => {
    cy.get('.content-loading').should('not.be.visible')
    cy.get('.icon-tick').should('be.visible')
    if (Cypress.config("viewportWidth") < 1111) cy.get('.betslipToggle').click()
    cy.get('#bet-slip').should('be.visible').within(() => {
        cy.contains(outcome).should('be.visible')
    })
})

When('I remove that {string} from the betslip', (outcome) => {
    cy.get('.content-loading').should('not.be.visible')
    cy.get('.remove').click()
})

Then('the betslip is empty', () => {
    cy.get('.content-loading').should('not.be.visible')
    cy.get('#bets-singles > .singleBetView > .noBets').should('have.text', 'Add selections to place a bet.')

})