class Demo3c {
  paint(ctx, { width, height }, props) { // eslint-disable-line
    const yoff = -25;
    const xoff = 35;
    ctx.beginPath();
    ctx.moveTo(121 + xoff, 131 + yoff);
    ctx.bezierCurveTo(163 + xoff, 64 + yoff, 178 + xoff, 98 + yoff, 171 + xoff, 111 + yoff);
    ctx.bezierCurveTo(163 + xoff, 114 + yoff, 185 + xoff, 95 + yoff, 184 + xoff, 113 + yoff);
    ctx.bezierCurveTo(220 + xoff, 38 + yoff, 244 + xoff, 72 + yoff, 236 + xoff, 81 + yoff);
    ctx.bezierCurveTo(230 + xoff, 94 + yoff, 261 + xoff, 48 + yoff, 263 + xoff, 79 + yoff);
    ctx.bezierCurveTo(300 + xoff, 34 + yoff, 360 + xoff, 17 + yoff, 333 + xoff, 94 + yoff);
    ctx.bezierCurveTo(452 + xoff, 61 + yoff, 352 + xoff, 178 + yoff, 358 + xoff, 174 + yoff);
    ctx.bezierCurveTo(390 + xoff, 175 + yoff, 335 + xoff, 213 + yoff, 357 + xoff, 198 + yoff);
    ctx.bezierCurveTo(383 + xoff, 203 + yoff, 354 + xoff, 241 + yoff, 351 + xoff, 252 + yoff);
    ctx.bezierCurveTo(445 + xoff, 216 + yoff, 341 + xoff, 385 + yoff, 315 + xoff, 356 + yoff);
    ctx.bezierCurveTo(312 + xoff, 373 + yoff, 303 + xoff, 383 + yoff, 293 + xoff, 375 + yoff);
    ctx.bezierCurveTo(297 + xoff, 437 + yoff, 241 + xoff, 468 + yoff, 224 + xoff, 415 + yoff);
    ctx.bezierCurveTo(225 + xoff, 441 + yoff, 214 + xoff, 455 + yoff, 203 + xoff, 451 + yoff);
    ctx.bezierCurveTo(183 + xoff, 500 + yoff, 127 + xoff, 495 + yoff, 108 + xoff, 476 + yoff);
    ctx.bezierCurveTo(86 + xoff, 530 + yoff, 30 + xoff, 534 + yoff, 55 + xoff, 465 + yoff);
    ctx.bezierCurveTo(38 + xoff, 465 + yoff, 44 + xoff, 458 + yoff, 45 + xoff, 452 + yoff);
    ctx.bezierCurveTo(28 + xoff, 462 + yoff, 15 + xoff, 484 + yoff, 13 + xoff, 454 + yoff);
    ctx.bezierCurveTo(-41 + xoff, 469 + yoff, -42 + xoff, 299 + yoff, 25 + xoff, 293 + yoff);
    ctx.bezierCurveTo(18 + xoff, 292 + yoff, 19 + xoff, 290 + yoff, 18 + xoff, 283 + yoff);
    ctx.bezierCurveTo(-20 + xoff, 289 + yoff, -21 + xoff, 258 + yoff, 15 + xoff, 239 + yoff);
    ctx.bezierCurveTo(11 + xoff, 224 + yoff, 21 + xoff, 217 + yoff, 35 + xoff, 206 + yoff);
    ctx.bezierCurveTo(52 + xoff, 145 + yoff, 118 + xoff, 97 + yoff, 121 + xoff, 131 + yoff);
    ctx.fill();
  }
}
registerPaint('demo3c', Demo3c); // eslint-disable-line
