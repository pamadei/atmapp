# ATM App
 
## Introduction:
 
Welcome to the **ATM App**. This app will emulate an ATM machine given a PIN code. When a correct PIN (1111) is provided, it will return the Current Balance for that user. The user will be able to withdraw with a cap overdraft of £100.
 
***
 
### Prerequisites
 
* You need to have **NodeJS** installed - this app is running in the node *version: 10.15.1*.
* You need to have **npm** or **yarn** installed.
* You need to run **npm install** to download the dependencies (i.e. Jest, Webpack & Webpack Web Server).
 
***
 
## Getting Started
 
Once you clone this repo, you can try the ATM APP by the following command to start a local web server: **npm start**.
 
***
 
## Webpack and Production
 
We are using webpack as a bundler and optimization tool. For development, as we mentioned you can run the dev server with the command **npm start**. To generate files for production you can run **npm run build** to create a dist folder with all the main html, css and js files optimized (minify).
 
***
 
## Assumptions
 
We should consider the following assumptions:
 
* Once the user has provided a correct PIN number, the user will be able to withdraw from its current balance with the possibility to use a overdraft of up to £100.
* **There is only one valid PIN (1111)**. Although if a different PIN is provided by the user which the POST request call returns a valid response, the ATM APP will get the current balance and operate as normal and expected.
* Initial State - The initial state is when the ATM has £310 available to be withdrawn. The available notes can be illustrated with the following **Object: {5: 4,10: 15,20: 7}**. Which represents to 4 notes of £5, 15 notes of £10 and 7 notes of £20.
* User session - A user session is while the SPA (Single-page application) is not reloaded.
* If the SPA is reloaded or the user clicks on the action button **cancel**. All the variables are rebooted and both user's current balance and ATM's available notes are setup as the initial state.
* The ATM has a limited number of Available Notes and this can not be updated through the session of a user.
* To check the current balance we are making a POST request which it happens only once. After the user submits the correct PIN, the current balance is saved in a variable and updated accordingly depending on the user's withdrawals.
 
***
 
## Test Coverage
 
All the tests can be run by the following command **npm run test**.
 
* All helper functions are returning the output that we are expecting.
* **GetAmountToWithdraw function** return a type Object with two objects (notesAvaiables and notesToWithdraw).This helper function transform an object with notes to an amount that represents the sum of those notes.
* **GetCurrentBalance function** makes an API POST request to get the Current Balance given a correct PIN number.
* **WithdrawMoney function** - Given an amount to withdraw and the notes Available will return an object with the number of notes to withdraw and the updated number of notes available.
 
 
***
 
## Dependencies for Development
 
* [Jest](https://github.com/facebook/jest) for testing all functions are returning the output that we are expecting.
* [Webpack](https://github.com/webpack/webpack) to bundle javascript, html, css and images files.
* [Webpack-Web-Server](https://github.com/webpack/webpack-dev-server) serves a Webpack app in localhost://9000.