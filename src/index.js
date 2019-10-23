import './styles.css'
import {
  getCurrentBalanceCanvas,
  getCurrentBalance
} from './app/getCurrentBalance/getCurrentBalance'
import withdrawMoney from './app/withdrawMoney/withdrawMoney'
import getAmountToWithdraw from './app/getAmountToWithdraw/getAmountToWitdraw'
import setCanvas from './app/canvas/setCanvas/SetCanvas'

// Setting up Canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let xCord = 115;
let yCord = 50;
setCanvas(ctx);


// Set Elements //
let monitorPin = document.getElementById('monitorPin');
let monitorDigits = document.getElementById('monitorDigits');
const container = document.getElementById('container');

// Setting up variables
let pinEntered = false;
let currentBalance = 0;
let initialCurrentBalance = 0;
let checkedCurrentBalance = false;
const WITHDRAW_LIMIT = -100;

const INITIAL_NOTES_STATE = {
  5: 4,
  10: 15, // change back to  15
  20: 7
}


// Create a copy of Notes Initial State as we will update this value.
let notesAvailable = {
  ...INITIAL_NOTES_STATE
}

let amountNotesAvailable = getAmountToWithdraw(notesAvailable);
const initialAmountNotesAvailable = getAmountToWithdraw(INITIAL_NOTES_STATE);

//// Helpers ////

// Reset Cordenates //
const resetCoordX = () => xCord = 115


// Clear Canvas //
const clearCanvas = (x, y, width, height) => {
  ctx.clearRect(x, y, width, height);
  monitorPin.remove();
  monitorPin = document.createElement('div')
  monitorPin.id = "monitorPin";
  monitorPin.className = "pin"
  container.appendChild(monitorPin);
  xCord = 115;
}

// Clear Pin Button Action Helper //
const clearPins = (x, y, width, height) => {
  ctx.clearRect(x, y, width, height);
  monitorPin.remove();
  monitorPin = document.createElement('div')
  monitorPin.id = "monitorPin";
  monitorPin.className = "pin"
  container.appendChild(monitorPin);
  xCord = 115;

}

// Clear Digits Button Action Helper //
const clearDigits = (x, y, width, height) => {
  ctx.clearRect(x, y, width, height);
  monitorDigits.remove();
  monitorDigits = document.createElement('div')
  monitorDigits.id = "monitorDigits";
  monitorDigits.className = "digits";
  container.appendChild(monitorDigits);
  xCord = 115;

}

// Initial State //

const initialState = () => {

  monitorPin.remove();
  monitorPin = document.createElement('div')
  monitorPin.id = "monitorPin";
  monitorPin.className = "pin"
  container.appendChild(monitorPin);

  monitorDigits.remove();
  monitorDigits = document.createElement('div')
  monitorDigits.id = "monitorDigits";
  monitorDigits.className = "digits";
  container.appendChild(monitorDigits);

  // pinEntered = false;

  // set initial state Canvas 
  xCord = 115;
  yCord = 50;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.fillText(`Your Current Balance is: £${currentBalance}`, 155, 35);
  ctx.fillText('Please enter the amount to withdraw', 155, 75);
  ctx.font = "16px Monaco";
  ctx.fillText('£', 115, 100);

}

// Initial State //

const resetATM = (pinError) => {

  if (pinError) {
    checkedCurrentBalance = false
  }
  monitorPin.remove();
  monitorPin = document.createElement('div')
  monitorPin.id = "monitorPin";
  monitorPin.className = "pin"
  container.appendChild(monitorPin);

  monitorDigits.remove();
  monitorDigits = document.createElement('div')
  monitorDigits.id = "monitorDigits";
  monitorDigits.className = "digits";
  container.appendChild(monitorDigits);

  pinEntered = false;
  // resetATMchecked = true; // Check if it can be removed.
  // checkedCurrentBalance= false; // Check if it can be removed
  // set initial state Canvas 
  xCord = 115;
  yCord = 50;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.font = "30px Monaco";
  ctx.fillText('Welcome', 155, 30);
  ctx.font = "12px Monaco";
  ctx.fillText('Enter your Pin', 155, 50);
  ctx.font = "30px Monaco";

  notesAvailable = {
    ...INITIAL_NOTES_STATE
  }

}


// Setting Menu Acctions
export default class SettigsMenu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  cancel() {
    resetATM();
  }

  clear() {
    !pinEntered ? clearPins(50, 60, 200, 100) : clearDigits(120, 80, 90, 50)
  }

  enter() {

    /// get pin numbers and make an API CALL
    // let pin = "1111"
    const enterFun = async () => {
      if (!pinEntered) {
        let pinsArray = []
        const pins = document.getElementById('monitorPin').getElementsByClassName('myPin')
        for (let i = 0; i < pins.length; i++) {
          pinsArray.push(pins[i].innerHTML);
        }
        const pin = pinsArray.join('')
        // Get CurrentBalance
        // Potential Helper

        // Check only one time the currentBalance
        if (!checkedCurrentBalance) {
          const currentBalanceResponse = await getCurrentBalance(pin);
          console.log(currentBalanceResponse)
          initialCurrentBalance = currentBalanceResponse;
          currentBalance = initialCurrentBalance;

          checkedCurrentBalance = true;
          getCurrentBalanceCanvas(pin, ctx, canvas, resetATM)
        } else {
          ctx.beginPath();
          ctx.font = "12px Monaco";
          ctx.fillText(`Your Current Balance is £${currentBalance}`, 155, 100);
        }
        pinEntered = true;
        if (initialCurrentBalance) {
          console.log(initialCurrentBalance)
          setTimeout(() => {
            clearCanvas(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.fillText('Please enter the amount to withdraw', 155, 75);
            ctx.font = "16px Monaco";
            ctx.fillText('£', 115, 100);
          }, 4000);
        }
      } else {
        // getDigits from User
        let digitsArray = []
        const digits = document.getElementById('monitorDigits').getElementsByClassName('myDigits')
        for (let i = 0; i < digits.length; i++) {
          digitsArray.push(digits[i].innerHTML);
        }
        const amountToWithdraw = +digitsArray.join('')

        // Update currentBalance
        currentBalance -= amountToWithdraw;
        // Check overdraft
        if (currentBalance < WITHDRAW_LIMIT) {
          currentBalance = WITHDRAW_LIMIT;
        }
        if (amountToWithdraw >= amountNotesAvailable) {
          currentBalance = -(initialAmountNotesAvailable - initialCurrentBalance);
        }
        console.log('last : ' + currentBalance)

        const statusOps = withdrawMoney(amountToWithdraw, notesAvailable, currentBalance);
        switch (true) {
          case amountToWithdraw >= amountNotesAvailable && currentBalance >= WITHDRAW_LIMIT:
            console.log(' Cases 1 - Working - When the ATM does not have more notes avaialables')
            clearCanvas(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.font = "10px Monaco";
            ctx.fillText(`You are withdrawing £${amountToWithdraw}`, 155, 55);
            ctx.fillText(`However, this ATM only has £${amountNotesAvailable} available.`, 155, 80);
            ctx.fillText(`You will be able to withdraw only £${amountNotesAvailable}.`, 155, 105);
            // Withdraw Helper //
            setTimeout(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.beginPath();
              ctx.font = "10px Monaco";
              ctx.fillText(`£🤕 Ups! You have used all your current balance!`, 155, 30);
              ctx.fillText('You can overdraft up to £100', 155, 55);
              ctx.fillText(`Your overdraft is £${currentBalance}`, 155, 80);
              ctx.font = "9px Monaco";
              ctx.fillText('Representative 1,000.0% APR (variable) 🤑', 155, 105);
              ctx.font = "12px Monaco";
            }, 2000);
            setTimeout(() => {
              clearCanvas(0, 0, canvas.width, canvas.height);
              ctx.beginPath();
              ctx.font = "18px Monaco";
              ctx.fillText('Your withdrawl: ', 155, 30);
              ctx.fillText(`£${Object.values(statusOps.notesToWithdraw).reduce((t, m, i) => t + m * Object.keys(statusOps.notesToWithdraw)[i], 0)}`, 155, 55);
              // Display withdraw on canvas //
              for (let n in statusOps.notesToWithdraw) {
                ctx.fillText(`* £${n} x ${statusOps.notesToWithdraw[n]} = ${n * statusOps.notesToWithdraw[n]}`, 150, yCord += 20);
              }
              // Reset to 4000;
            }, 5000);
            setTimeout(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.beginPath();
              ctx.font = "12px Monaco";
              ctx.fillText('🤕 Upps! This ATM run out of Money.', 155, 75);
            }, 7000);
            break;
          case amountToWithdraw < amountNotesAvailable && currentBalance >= 0:
            console.log(' Cases 2 - Working - When user perfoms a normal withdraw')
            // Canvas //
            clearCanvas(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.font = "18px Monaco";
            ctx.fillText('Your withdrawl: ', 155, 30);
            ctx.fillText(`£${amountToWithdraw}`, 155, 55);
            ctx.font = "12px Monaco";

            // Display withdraw on canvas //
            for (let n in statusOps.notesToWithdraw) {
              ctx.fillText(`* £${n} x ${statusOps.notesToWithdraw[n]} = ${n * statusOps.notesToWithdraw[n]}`, 150, yCord += 20);
            }
            setTimeout(() => {
              initialState();
              // Reset to 4000;
            }, 4000);
            break;
          case amountToWithdraw < amountNotesAvailable && 0 > currentBalance && currentBalance > -100:
            console.log('Cases 3 - Working - When user needs to use overdraft')
            // Canvas //
            clearCanvas(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.font = "18px Monaco";
            ctx.fillText('Your withdrawl: ', 155, 30);
            ctx.fillText(`£${amountToWithdraw}`, 155, 55);
            ctx.font = "12px Monaco";

            // Display withdraw on canvas //
            for (let n in statusOps.notesToWithdraw) {
              ctx.fillText(`* £${n} x ${statusOps.notesToWithdraw[n]} = ${n * statusOps.notesToWithdraw[n]}`, 150, yCord += 20);
            }
            setTimeout(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.beginPath();
              ctx.font = "10px Monaco";
              ctx.fillText(`£🤕 Ups! You have used all your current balance!`, 155, 30);
              ctx.fillText('You can overdraft up to £100', 155, 55);
              ctx.fillText(`Your overdraft is £${currentBalance}`, 155, 80);
              ctx.font = "9px Monaco";
              ctx.fillText('Representative 1,000.0% APR (variable) 🤑', 155, 105);
              ctx.font = "12px Monaco";
            }, 4000);
            setTimeout(() => {
              initialState();
            }, 8000);
            break;
          case amountToWithdraw < amountNotesAvailable:
            console.log(currentBalance + ' Cases 4 - Working')
            // Withdraw Helper //
            clearCanvas(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.font = "18px Monaco";
            ctx.fillText('Your withdrawl: ', 155, 30);
            ctx.fillText(`£${amountToWithdraw}`, 155, 55);

            // Display withdraw on canvas //
            for (let n in statusOps.notesToWithdraw) {
              ctx.fillText(`* £${n} x ${statusOps.notesToWithdraw[n]} = ${n * statusOps.notesToWithdraw[n]}`, 150, yCord += 20);
            }
            setTimeout(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.beginPath();
              ctx.font = "10px Monaco";
              ctx.fillText(`£🤕 Upps! You have used all your money and`, 155, 55);
              ctx.fillText('all your overdraft of £100', 155, 80);
            }, 5000);

            setTimeout(() => {
              ctx.fillText('Thank you', 155, 105);
            }, 8000);
            break;
          default:
            break;
        }
        amountNotesAvailable = getAmountToWithdraw(statusOps.notesAvailable);
      }

    }

    enterFun();
  }

  onClick(event) {
    let action = event.target.dataset.keyActions;
    if (action) {
      this[action]();
    }
  };
}

new SettigsMenu(menu);

// Add EventListeners to Digits and Pin // 
document.addEventListener('click', function (event) {
  const myPin = document.getElementsByClassName('myPin');
  const myDigits = document.getElementsByClassName('myDigits');

  if (event.target.dataset.key != undefined && myPin.length < 4 && myDigits.length < 4) {
    if (!pinEntered) {
      const pPin = document.createElement('p');
      const pText = document.createTextNode(event.target.innerHTML)
      pPin.appendChild(pText);
      pPin.className = "myPin";
      monitorPin.appendChild(pPin);

      // Update Canvas //
      ctx.beginPath();
      ctx.font = "16px Monaco";
      ctx.fillText(pPin.innerHTML, xCord += 20, 80);
    } else {

      // console.log('pin entered')
      const pDigit = document.createElement('p');
      const pText = document.createTextNode(event.target.innerHTML);
      pDigit.appendChild(pText);
      pDigit.className = "myDigits";
      monitorDigits.appendChild(pDigit);

      // Canvas //
      ctx.beginPath();
      ctx.font = "16px Monaco";
      ctx.fillText(pDigit.innerHTML, xCord += 20, 100);
    }
  }
});