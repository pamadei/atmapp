const setCavasYourWithdrawl = (ctx,amountToWithdraw) => {
  ctx.beginPath();
  ctx.font = "18px Monaco";
  ctx.fillText('Your withdrawl: ', 155, 30);
  ctx.fillText(`£${amountToWithdraw}`, 155, 55);
  ctx.font = "12px Monaco";

}

export default setCavasYourWithdrawl;