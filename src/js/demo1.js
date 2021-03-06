class Demo1 {
  static get inputProperties() { return ['--brushstrokes']; }

  static getRandomPoint(width, height) {
    return [
      Math.floor(Math.random() * (width + 1)),
      Math.floor(Math.random() * (height + 1)),
    ];
  }

  static getXAdjustment(mag) {
    return -mag + Math.floor(Math.random() * (2 * mag + 1));
  }

  static getYAdjustment(mag) {
    return Math.floor(Math.random() * mag);
  }

  static getNumber(base, range) {
    return base + Math.floor(Math.random() * range);
  }

  static getWidth() {
    return Math.floor(Math.random() * 2) + 2;
  }

  paint(ctx, { width, height }, props) { // eslint-disable-line
    const brushstrokes = props.get('--brushstrokes');

    ctx.fillStyle = 'rgb(30, 10, 0)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < brushstrokes; i += 1) {
      const [x, y] = Demo1.getRandomPoint(width, height);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Demo1.getXAdjustment(8), y + Demo1.getYAdjustment(28));
      ctx.lineWidth = Demo1.getWidth();
      ctx.strokeStyle = `rgba(${Demo1.getNumber(201, 40)}, ${Demo1.getNumber(148, 45)}, ${Demo1.getNumber(102, 45)}, ${Demo1.getNumber(70, 31) / 100})`;
      ctx.stroke();
    }
  }
}
registerPaint('demo1', Demo1); // eslint-disable-line
