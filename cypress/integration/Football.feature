Feature: Viewing a Football event
I want to navigate PokerStars to a Football event

Scenario: Navigating to the Football sport page
Given I am on the 'home' page
When I select the 'soccer' sports page
Then I verify that I am on the 'soccer' sports page

Scenario: Navigating to a Football event
Given I am on the 'soccer' page
When I click on 'Tomorrow' day
Then I verify that there are events
When I click on the first event
Then I verify that I am on the event page
And I verify that a GET event request was made