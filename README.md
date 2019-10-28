# ATM App

## Introduction:

Welcome to the **ATM App**. This app will emulate an ATM machine given a PIN code. When a correct PIN (1111) is provided, it will return the Current Balance for that user. The user will be able to withdraw with a cap overdraft of £100.

***

### Prerequisites

* You need to have **NodeJS** installed - this app is running in the node *version: 10.15.1*. 
* You need to have **npm** or **yarn** installed.
* You need to run **npm install** to download the dependencies (i.e. Jest & Webpack Web Server).

***

## Getting Started

Once you clone this repo, you can run try the ATM APP by the following command to start a local web server: **npm start**.

***

## Webpack and Production

We are using webpack as a bundler and optmization tool. For development, as we mentioned you can run the dev server with the command **npm start**. To generate files for production you can run **npm run build** to create a dist folder with all the main html, css and js files optimized (minify).

***

## Assumptions

We should consider the following assumptions:

* Once the user has provided the PIN, the user will be able to withdraw its current Balance plus a overdraft of up to £100.
* There is only one valid PIN (1111). Although if a different PIN is provided by the user which the API return a valid response. The ATM APP will get the current balance and operate normally and expected.
* User session - A user session is while the SPA is not reloaded. 
* The ATM has a limited number of Available Notes and this can not be updated through the session of a user.
* To check the current balance we are making a POST api call which it happens only once. After the user submit their correct PIN the current balance is saved in a variable.

***

## Test Coverage

All the tests can be run by the following command **npm run test**.

* All helper functions are returning the output that we are expecting.
* GetAmountToWithdraw function return an typeof Object with two objects (notesAvaiables and notesToWithdraw).This helper function transform an object with notes to an amount that represent the sum of those notes.
* GetCurrentBalance function makes a API POST request to get the Current Balance given a correct PIN number.
* withdrawMoney function - Given an amount to withdraw and the notes Available will return an object with the number of notes to withdraw and the updated number of notes available.




***

## Dependencies for Development

* [Jest](https://github.com/facebook/jest) for testing all functions are returning the output that we are expecting.
* [Webpack](https://github.com/webpack/webpack) to bundler javascript files and  a Webpack app in localhost://9000.
* [Webpack-Web-Server](https://github.com/webpack/webpack-dev-server) serves a Webpack app in localhost://9000.




