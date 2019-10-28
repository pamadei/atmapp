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
    for (let key in resultOps.notesAvailable) {
      if ((amountToWithdraw - +key) >= 0 && resultOps.notesAvailable[key] > 0) {
        // console.log(amountToWithdraw);
        amountToWithdraw -= +key;
        if (typeof resultOps.notesToWithdraw[key] === 'undefined') {
          resultOps.notesToWithdraw[key] = 1;
          resultOps.notesAvailable[key]--;
        } else {
          resultOps.notesToWithdraw[key]++;
          resultOps.notesAvailable[key]--;
        }
      }
    }
  }
  amountNotesAvailable = getAmountToWithdraw(resultOps.notesAvailable);
  console.log(resultOps)
  return resultOps
}

export default withdrawMoney;