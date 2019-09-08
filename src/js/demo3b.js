class Demo3b {
  paint(ctx, { width, height }, props) { // eslint-disable-line
    ctx.beginPath();
    ctx.moveTo(320, 155);
    ctx.lineTo(337, 159);
    ctx.lineTo(310, 247);
    ctx.lineTo(304, 245);
    ctx.lineTo(321, 155);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(303, 259, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}
registerPaint('demo3b', Demo3b); // eslint-disable-line
