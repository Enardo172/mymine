function renderTexture() {

}

function renderPixel(ctx, xb, yb, px, py, color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.fillRect(x + xb + (px - 5) * 4, y + yb + (py - 5) * 4, 4, 4);
}

function renderStone(ctx, xb, yb) {
  // 97 A8 B9 A8 A8 97 A8 97 B9 B9
  // 87 B9 97 B9 B9 B9 A8 97 97 A8
  // A8 97 97 97 97 87 87 B9 B9 B9
  // B9 B9 A8 A8 B9 B9 87 B9 B9 A8
  // A8 87 87 97 A8 A8 97 97 97 87
  // A8 B9 B9 A8 A8 97 97 97 B9 B9
  // A8 A8 A8 A8 A8 A8 87 87 B9 B9
  // B9 A8 97 97 97 A8 B9 A8 97 97
  // 97 87 87 A8 97 97 A8 87 87 B9
  // 97 97 B9 B9 A8 97 B9 B9 A8 87

  /*ctx.beginPath();
  ctx.strokeStyle = "grey";
  ctx.lineWidth = 2;
  ctx.moveTo(x + xb - 19, y + yb - 19);
  ctx.lineTo(x + xb - 19, y + yb + 19);
  ctx.lineTo(xb + x + 19, y + yb + 19);
  ctx.lineTo(xb + x + 19, y + yb - 19);
  ctx.lineTo(xb + x - 19, y + yb - 19);
  ctx.lineTo(x + xb - 19, y + yb + 19);
  ctx.stroke();*/

  renderPixel(ctx, xb, yb, 0, 0, "#979797");
  renderPixel(ctx, xb, yb, 1, 1, "#979797");
  renderPixel(ctx, xb, yb, 2, 2, "#979797");
  renderPixel(ctx, xb, yb, 3, 3, "#979797");
  renderPixel(ctx, xb, yb, 4, 4, "#979797");
  renderPixel(ctx, xb, yb, 5, 5, "#979797");
  renderPixel(ctx, xb, yb, 6, 6, "#979797");
  renderPixel(ctx, xb, yb, 8, 8, "#979797");
  renderPixel(ctx, xb, yb, 9, 9, "#979797");

  /*ctx.beginPath();
  ctx.moveTo(x + xb - 4, y + yb - 4);
  ctx.lineTo(x + xb - 4, y + yb + 4);
  ctx.lineTo(x + xb + 4, y + yb + 4);
  ctx.lineTo(x + xb + 4, y + yb - 4);
  ctx.stroke();*/
}