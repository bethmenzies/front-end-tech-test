Feature: Viewing a Darts event
I want to navigate PokerStars to a Darts event

Scenario: Navigating to the Darts sport page
Given I am on the 'home' page
When I select the 'darts' sports page
Then I verify that I am on the darts outrights page

Scenario: Navigating to the calendar to show there are no events
Given I am on the 'darts' page
When I select the calendar
Then I verify that I am on the 'darts' calendar page
And I verify that there are no events