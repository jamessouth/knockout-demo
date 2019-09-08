class Demo3a {
  paint(ctx, { width, height }, props) { // eslint-disable-line
    const xoff = 35;
    const yoff = -30;
    ctx.beginPath(); // red
    ctx.moveTo(139 + xoff, 156 + yoff);
    ctx.bezierCurveTo(140 + xoff, 164 + yoff, 151 + xoff, 162 + yoff, 154 + xoff, 155 + yoff);
    ctx.bezierCurveTo(172 + xoff, 185 + yoff, 190 + xoff, 166 + yoff, 195 + xoff, 152 + yoff);
    ctx.bezierCurveTo(200 + xoff, 158 + yoff, 225 + xoff, 147 + yoff, 237 + xoff, 137 + yoff);
    ctx.bezierCurveTo(244 + xoff, 180 + yoff, 300 + xoff, 161 + yoff, 336 + xoff, 151 + yoff);
    ctx.bezierCurveTo(271 + xoff, 211 + yoff, 314 + xoff, 269 + yoff, 341 + xoff, 273 + yoff);
    ctx.bezierCurveTo(282 + xoff, 281 + yoff, 323 + xoff, 319 + yoff, 315 + xoff, 306 + yoff);
    ctx.bezierCurveTo(275 + xoff, 305 + yoff, 293 + xoff, 360 + yoff, 290 + xoff, 344 + yoff);
    ctx.bezierCurveTo(219 + xoff, 332 + yoff, 226 + xoff, 407 + yoff, 225 + xoff, 397 + yoff);
    ctx.bezierCurveTo(188 + xoff, 380 + yoff, 192 + xoff, 409 + yoff, 184 + xoff, 410 + yoff);
    ctx.bezierCurveTo(145 + xoff, 377 + yoff, 108 + xoff, 432 + yoff, 98 + xoff, 453 + yoff);
    ctx.bezierCurveTo(88 + xoff, 417 + yoff, 53 + xoff, 423 + yoff, 52 + xoff, 427 + yoff);
    ctx.bezierCurveTo(77 + xoff, 379 + yoff, 68 + xoff, 367 + yoff, 38 + xoff, 371 + yoff);
    ctx.bezierCurveTo(73 + xoff, 344 + yoff, 53 + xoff, 316 + yoff, 43 + xoff, 311 + yoff);
    ctx.bezierCurveTo(66 + xoff, 288 + yoff, 45 + xoff, 244 + yoff, 45 + xoff, 256 + yoff);
    ctx.bezierCurveTo(74 + xoff, 260 + yoff, 85 + xoff, 231 + yoff, 85 + xoff, 208 + yoff);
    ctx.bezierCurveTo(121 + xoff, 218 + yoff, 138 + xoff, 191 + yoff, 139 + xoff, 171 + yoff);
    ctx.lineTo(139 + xoff, 160 + yoff);
    ctx.fillStyle = '#ea2916';
    ctx.fill();
    ctx.lineWidth = '5';
    ctx.strokeStyle = '#28252E';
    ctx.stroke();

    ctx.beginPath(); // yellow
    ctx.moveTo(23 + xoff, 117 + yoff);
    ctx.bezierCurveTo(44 + xoff, 133 + yoff, 113 + xoff, 190 + yoff, 122 + xoff, 185 + yoff);
    ctx.bezierCurveTo(129 + xoff, 209 + yoff, 205 + xoff, 248 + yoff, 193 + xoff, 239 + yoff);
    ctx.bezierCurveTo(182 + xoff, 249 + yoff, 288 + xoff, 151 + yoff, 277 + xoff, 161 + yoff);
    ctx.bezierCurveTo(266 + xoff, 171 + yoff, 385 + xoff, 67 + yoff, 389 + xoff, 75 + yoff);
    ctx.lineTo(389 + xoff, 83 + yoff);
    ctx.bezierCurveTo(352 + xoff, 94 + yoff, 281 + xoff, 191 + yoff, 289 + xoff, 195 + yoff);
    ctx.bezierCurveTo(264 + xoff, 199 + yoff, 277 + xoff, 236 + yoff, 268 + xoff, 224 + yoff);
    ctx.bezierCurveTo(253 + xoff, 225 + yoff, 298 + xoff, 233 + yoff, 318 + xoff, 219 + yoff);
    ctx.bezierCurveTo(310 + xoff, 226 + yoff, 386 + xoff, 203 + yoff, 389 + xoff, 209 + yoff);
    ctx.lineTo(384 + xoff, 218 + yoff);
    ctx.bezierCurveTo(355 + xoff, 220 + yoff, 298 + xoff, 255 + yoff, 297 + xoff, 252 + yoff);
    ctx.bezierCurveTo(282 + xoff, 248 + yoff, 252 + xoff, 271 + yoff, 237 + xoff, 267 + yoff);
    ctx.bezierCurveTo(234 + xoff, 252 + yoff, 245 + xoff, 360 + yoff, 264 + xoff, 381 + yoff);
    ctx.bezierCurveTo(270 + xoff, 403 + yoff, 291 + xoff, 460 + yoff, 312 + xoff, 496 + yoff);
    ctx.lineTo(306 + xoff, 499 + yoff);
    ctx.bezierCurveTo(282 + xoff, 448 + yoff, 228 + xoff, 360 + yoff, 222 + xoff, 366 + yoff);
    ctx.bezierCurveTo(213 + xoff, 378 + yoff, 196 + xoff, 311 + yoff, 187 + xoff, 323 + yoff);
    ctx.bezierCurveTo(182 + xoff, 309 + yoff, 157 + xoff, 386 + yoff, 151 + xoff, 427 + yoff);
    ctx.bezierCurveTo(132 + xoff, 436 + yoff, 127 + xoff, 479 + yoff, 117 + xoff, 501 + yoff);
    ctx.lineTo(111 + xoff, 502 + yoff);
    ctx.bezierCurveTo(113 + xoff, 481 + yoff, 128 + xoff, 457 + yoff, 125 + xoff, 425 + yoff);
    ctx.bezierCurveTo(121 + xoff, 387 + yoff, 142 + xoff, 349 + yoff, 139 + xoff, 364 + yoff);
    ctx.bezierCurveTo(125 + xoff, 358 + yoff, 94 + xoff, 394 + yoff, 80 + xoff, 388 + yoff);
    ctx.bezierCurveTo(44 + xoff, 398 + yoff, 16 + xoff, 418 + yoff, -5 + xoff, 426 + yoff);
    ctx.lineTo(-5 + xoff, 416 + yoff);
    ctx.bezierCurveTo(36 + xoff, 396 + yoff, 47 + xoff, 392 + yoff, 61 + xoff, 383 + yoff);
    ctx.bezierCurveTo(76 + xoff, 362 + yoff, 148 + xoff, 329 + yoff, 135 + xoff, 337 + yoff);
    ctx.bezierCurveTo(120 + xoff, 335 + yoff, 94 + xoff, 348 + yoff, 79 + xoff, 346 + yoff);
    ctx.bezierCurveTo(51 + xoff, 348 + yoff, 27 + xoff, 356 + yoff, -5 + xoff, 368 + yoff);
    ctx.lineTo(-5 + xoff, 361 + yoff);
    ctx.bezierCurveTo(45 + xoff, 343 + yoff, 67 + xoff, 321 + yoff, 76 + xoff, 313 + yoff);
    ctx.bezierCurveTo(98 + xoff, 290 + yoff, 145 + xoff, 269 + yoff, 132 + xoff, 277 + yoff);
    ctx.bezierCurveTo(124 + xoff, 290 + yoff, 111 + xoff, 217 + yoff, 103 + xoff, 230 + yoff);
    ctx.bezierCurveTo(90 + xoff, 188 + yoff, 47 + xoff, 146 + yoff, 20 + xoff, 123 + yoff);
    ctx.fillStyle = '#fdfe01';
    ctx.fill();
    ctx.lineWidth = '3';
    ctx.stroke();
    ctx.lineWidth = '5';

    ctx.beginPath(); // white
    ctx.moveTo(123 + xoff, 176 + yoff);
    ctx.lineTo(171 + xoff, 218 + yoff);
    ctx.lineTo(182 + xoff, 149 + yoff);
    ctx.lineTo(196 + xoff, 212 + yoff);
    ctx.lineTo(231 + xoff, 126 + yoff);
    ctx.lineTo(226 + xoff, 194 + yoff);
    ctx.lineTo(280 + xoff, 119 + yoff);
    ctx.lineTo(269 + xoff, 188 + yoff);
    ctx.lineTo(326 + xoff, 206 + yoff);
    ctx.lineTo(265 + xoff, 302 + yoff);
    ctx.lineTo(284 + xoff, 360 + yoff);
    ctx.lineTo(264 + xoff, 335 + yoff);
    ctx.lineTo(261 + xoff, 418 + yoff);
    ctx.lineTo(238 + xoff, 321 + yoff);
    ctx.lineTo(193 + xoff, 440 + yoff);
    ctx.lineTo(202 + xoff, 365 + yoff);
    ctx.lineTo(184 + xoff, 362 + yoff);
    ctx.lineTo(152 + xoff, 430 + yoff);
    ctx.lineTo(144 + xoff, 390 + yoff);
    ctx.lineTo(114 + xoff, 444 + yoff);
    ctx.lineTo(110 + xoff, 385 + yoff);
    ctx.lineTo(67 + xoff, 465 + yoff);
    ctx.lineTo(81 + xoff, 376 + yoff);
    ctx.lineTo(57 + xoff, 388 + yoff);
    ctx.lineTo(92 + xoff, 323 + yoff);
    ctx.lineTo(37 + xoff, 291 + yoff);
    ctx.lineTo(92 + xoff, 275 + yoff);
    ctx.lineTo(111 + xoff, 211 + yoff);
    ctx.lineTo(129 + xoff, 228 + yoff);
    ctx.closePath();
    ctx.fillStyle = '#ffffeb';
    ctx.fill();
    ctx.stroke();
  }
}
registerPaint('demo3a', Demo3a); // eslint-disable-line
