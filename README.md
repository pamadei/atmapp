
# ATM App

## Introduction:

Welcome to the **ATM App**. This app will emulate an ATM machine given a PIN code. When a correct PIN (1111) is provided it will return a Current Balance.

***

### Prerequisites

* You need to have **NodeJS** installed - this app is running in the node *version: 10.15.1*. 
* You need to have **npm** or **yarn** installed.
* You need to run **npm install** to download the dependencies (i.e. Jest & Webpack Web Server).

***

## Getting Started

Once inside the folder "ATMAPP", you can run this app, running in your command line the following command: **npm start**. This will run a local web server http://localhost:9000/ where you can try the ATMAPP.

***

## Assumptions

We should consider the following assumptions:

* Once the user has provided the PIN, the user will be able to withdraw its current Balance plus a overdratf of up to £100.
* There is only one valid PIN (1111). Although if a different PIN is provided by the user which the API return a valid response. The ATM APP will get the current balance and operate normally and expected.
* User session - A user session is while the SPA is not reloaded. 
* The ATM has a limited number of Available Notes and this can not be updated through the session of a user.

***

## Test Coverage

All the tests can be run by the following command **npm run test**.

* All helper functions are returning the output that we are expecting.
* GetAmountToWithdraw return an object with two objects (notesAvaiables and notesToWithdraw). For both we also test that they return typeof Object.

***

## Webpack

We are using webpack as a bundler and optmization tool. For development, you can run the dev server with the command **npm start** to generate files for production you can run **npm run build** to create a dist folder with all the main html, css and js minized.

***

## Dependencies for Development

* [Jest](https://github.com/facebook/jest) for testing all functions are returning the output that we are expecting.
* [Webpack](https://github.com/webpack/webpack) to bundler javascript files and  a Webpack app in localhost://9000.
* [Webpack-Web-Server](https://github.com/webpack/webpack-dev-server) serves a Webpack app in localhost://9000.




