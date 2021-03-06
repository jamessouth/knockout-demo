class Demo2 {
  static get inputProperties() { return ['--stripes']; }

  static getRandomPoint(width, height) {
    return [
      Math.floor(Math.random() * (width + 1)),
      Math.floor(Math.random() * (height + 1)),
    ];
  }

  static getWidth() {
    return Math.floor(Math.random() * 30) + 1;
  }

  static getColor(base, range) {
    return base + Math.floor(Math.random() * range + 1);
  }

  static getTransparency() {
    return Math.floor(Math.random() * 101) / 100;
  }

  paint(ctx, { width, height }, props) { // eslint-disable-line
    const stripes = props.get('--stripes');

    ctx.fillStyle = 'rgba(30, 30, 30, .6)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < stripes; i += 1) {
      const start = Demo2.getRandomPoint(width, height);
      const end = Demo2.getRandomPoint(width, height);
      ctx.beginPath();
      ctx.moveTo(...start);
      ctx.lineTo(...end);
      ctx.lineWidth = Demo2.getWidth();
      ctx.lineCap = 'square';
      ctx.strokeStyle = `rgba(${Demo2.getColor(16, 150)}, ${Demo2.getColor(18, 150)}, ${Demo2.getColor(12, 200)}, ${Demo2.getTransparency()})`;
      ctx.stroke();
    }
  }
}
registerPaint('demo2', Demo2); // eslint-disable-line
