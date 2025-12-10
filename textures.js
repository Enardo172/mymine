function renderTexture() {

}

function renderStone(ctx, xb, yb) {
  ctx.beginPath();
  ctx.strokeStyle = "grey";
  ctx.lineWidth = 2;
  ctx.moveTo(x + xb - 19, y + yb - 19);
  ctx.lineTo(x + xb - 19, y + yb + 19);
  ctx.lineTo(xb + x + 19, y + yb + 19);
  ctx.lineTo(xb + x + 19, y + yb - 19);
  ctx.lineTo(xb + x - 19, y + yb - 19);
  ctx.lineTo(x + xb - 19, y + yb + 19);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + xb - 4, y + yb - 4);
  ctx.lineTo(x + xb - 4, y + yb + 4);
  ctx.lineTo(x + xb + 4, y + yb + 4);
  ctx.lineTo(x + xb + 4, y + yb - 4);
  ctx.stroke();
}