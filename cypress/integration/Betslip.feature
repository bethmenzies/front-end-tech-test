Feature: Interact with the Betslip
I want to add an outcome to a betslip then remove it

Scenario Outline: Adding and removing an outcome from a sport betslip
Given I am on the '<sport>' calendar page
When I click on 'Tomorrow' day
Then I verify that there are events
When I click on the first event
Then I verify that I am on the '<sport>' event page
When I click on an '<outcome>'
Then that '<outcome>' is added to the betslip
When I remove that '<outcome>' from the betslip
Then the betslip is empty

Examples:
| sport | outcome |
| soccer | Match Result |
| tennis | Total Games |
| basketball | Total Points |
