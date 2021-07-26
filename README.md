# front-end-tech-test

Please find the front-end-tech-task for Beth Menzies. 

Pre-requisites: must have Node & npm installed on your machine -> follow these instructions to install https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

1 -> Clone the project from GitHub
2 -> Open the project
3 -> Do `npm install` to install the project
4a -> If you want to just run the tests, do `npm run cypress:run`
4b -> If you want to see the tests running in a browser, do `npm run cypress:open`
5 -> To generate the test report, do `node cucumber-html-report.js` then open the `index.html` file in the `./reports/cucumber-htmlreport.html` folder

As stated in the description of this commit https://github.com/bethmenzies/front-end-tech-test/commit/8b86d9aa4d2bb9d34a8dfafb0d8ae0ffb53936d2#diff-b992a0f54c012566800078d7a8b1d8a83f84ef4450bacb46a94a660fc5cb826e I found that there were no Darts events, it was only the Outrights displayed. As the task asked to check for the GET request for the event, I used Football as the sport for Task 1. I did leave in the tests for Darts that checks for no events as well. Hopefully that is okay. If only the World Matchplay hadn't finished off yesterday... :) 

Original README below

***


Tech Test for UI/FE
We recognise that people have different experience and different levels of ability. For this technical test we would ask that scenarios one and two are completed as a minimum, if you are able to do so you can also attempt scenario three.

We recommend spending no more than a few hours on this technical test.

Background of PokerStars Sports

PokerStars Sports is the sportsbook product offered by PokerStars. If you are familiar with sports betting you will already know your way around such a product.
Event Hierarchy

Within the product 'events' are generally single sporting events that offer multiple betting opportunities (markets). An example of this would be Manchester United vs. Leeds United. Each event has an associated `competition` (e.g. in the earlier example the competition would be the Premier League). Each `competition` then has an associated `sport` (e.g. in the earlier example the sport would be Football). The overall event hierarchy is therefore Sport > Competition > Event > Markets.
The Bet Slip

The bet slip is where a customer will enter a stake against an outcome that they have selected and place a bet. As an example a customer may want to place a bet on Leeds United to beat Manchester United. They would navigate to the event to find the market that they want to place the bet against, add that outcome to the bet slip, enter their stake (e.g. £1) and place a single bet.
There are a multitude of bet types available to customers but for the purpose of this technical test it is sufficient to place only single type bets (e.g. Leeds United to beat Manchester United).
There is no requirement for you to actually place the bet in the below scenario, you will therefore not need to have a registered account with PokerStars Sports or have to log in to the website.
Task:

Create a BDD automation framework to address the below scenarios;

Scenario 1 -Darts

As a PokerStars Sports user I want to navigate to https://www.pokerstarssports.uk and navigate to a Darts event. Once I have arrived at a darts event I would then like to verify that a `GET` request was made to the request URL.

Scenario 2 - Betslip

As a PokerStars Sports user I want to add an outcome to the bet slip for any sport and verify that the outcome is added to the bet slip. I would then like to remove this from the bet slip and verify that the bet slip is now empty.
Scenario 3 - Reporting (Optional)

For visibility of test runs we would like to see a reporting function within your framework that reports on test runs.
Once all test scenarios are finished please add instructions to the README file on how to execute these tests and any other useful information.

You can either upload this project to GitHub which is preferred or we will also accept this zipped up and sent as an attachment.

