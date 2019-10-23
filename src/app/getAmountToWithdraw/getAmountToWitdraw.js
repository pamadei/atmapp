function getAmountToWithdraw(notes) {
  const keys = Object.keys(notes);
  const amoutToWithdraw = Object.values(notes).reduce((t, m, i) => t + m * keys[i], 0);
  return amoutToWithdraw
}

export default getAmountToWithdraw;