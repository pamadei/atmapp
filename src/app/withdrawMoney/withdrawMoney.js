import getAmountToWithdraw from '../getAmountToWithdraw/getAmountToWitdraw'

function withdrawMoney(amountToWithdraw, notesAvailable) {

  const notesToWithdraw = {};
  const resultOps = {
    notesAvailable,
    notesToWithdraw
  }
  // ATM Money
  let amountNotesAvailable = getAmountToWithdraw(resultOps.notesAvailable);
  // User Money

  if (amountToWithdraw > amountNotesAvailable) {
    amountToWithdraw = amountNotesAvailable;
  }

  while (amountToWithdraw !== 0 && amountToWithdraw > 0) {
    for (let key2 in resultOps.notesAvailable) {
      if ((amountToWithdraw - +key2) >= 0 && resultOps.notesAvailable[key2] > 0) {
        // console.log(amountToWithdraw);
        amountToWithdraw -= +key2;
        if (typeof resultOps.notesToWithdraw[key2] === 'undefined') {
          resultOps.notesToWithdraw[key2] = 1;
          resultOps.notesAvailable[key2]--;
        } else {
          resultOps.notesToWithdraw[key2]++;
          resultOps.notesAvailable[key2]--;
        }
      }
    }
  }
  amountNotesAvailable = getAmountToWithdraw(resultOps.notesAvailable);
  console.log(resultOps.notesAvailable)
  return resultOps
}

export default withdrawMoney;