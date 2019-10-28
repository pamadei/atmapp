/* This helper function transform an object with notes to an amount that represent the sum of those notes */

function getAmountToWithdraw(notes) {
  const keys = Object.keys(notes);
  const amoutToWithdraw = Object.values(notes).reduce((t, m, i) => t + m * keys[i], 0);
  return amoutToWithdraw
}

export default getAmountToWithdraw;