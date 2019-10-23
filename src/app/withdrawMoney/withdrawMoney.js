import getAmountToWithdraw from '../getAmountToWithdraw/getAmountToWitdraw'

function withdrawMoney(amountToWithdraw, notesAvailable, currentBalance) {
  const notesToWithdraw = {};
  const statusOps = {
    notesAvailable,
    notesToWithdraw
  }
  // ATM Money
  let amountNotesAvailable = getAmountToWithdraw(statusOps.notesAvailable);
  // console.log('amountNotesAvailable: ' + amountNotesAvailable)  
  // User Money
  let amountAbleToWithdraw = currentBalance;

  if (amountToWithdraw > amountNotesAvailable) {
    amountToWithdraw = amountNotesAvailable;
  }

  while (amountToWithdraw !== 0 && amountToWithdraw > 0) {
    console.log('amountWithdrawing: ' + amountToWithdraw);
    for (let key2 in statusOps.notesAvailable) {
      if ((amountToWithdraw - +key2) >= 0 && statusOps.notesAvailable[key2] > 0) {
        // console.log(amountToWithdraw);
        amountToWithdraw -= +key2;
        if (typeof statusOps.notesToWithdraw[key2] === 'undefined') {
          statusOps.notesToWithdraw[key2] = 1;
          statusOps.notesAvailable[key2]--;
        } else {
          statusOps.notesToWithdraw[key2]++;
          statusOps.notesAvailable[key2]--;
        }
      }
    }
  }
  amountNotesAvailable = getAmountToWithdraw(statusOps.notesAvailable);
  console.log('amountNotesAvailable: ' + amountNotesAvailable)
  console.log(statusOps.notesAvailable)
  // amountAbleToWithdraw -= amountToWithdraw;
  console.log('amountAbleToWithdraw: ' + amountAbleToWithdraw);

  return statusOps
}

export default withdrawMoney;