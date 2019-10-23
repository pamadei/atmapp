// Setting up Canvas

const setCanvas = (ctx) => {
  ctx.beginPath();
  ctx.font = "30px Monaco";
  ctx.fillStyle = "#8BEC68"
  ctx.textAlign = "center";
  ctx.fillText('Welcome', 155, 30);
  ctx.font = "12px Monaco";
  ctx.fillText('Enter your Pin', 155, 50);
  ctx.font = "30px Monaco";
}

export default setCanvas;
