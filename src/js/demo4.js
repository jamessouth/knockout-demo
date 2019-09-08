class Demo4 {
  static get inputProperties() { return ['--rays']; }

  static getDistAlongSide(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  static getWidth() {
    return Math.floor(Math.random() * 85) + 1;
  }

  static getPoint(side, width, height) {
    switch (side) {
      case 0:
        return [
          0,
          Demo4.getDistAlongSide(height),
        ];
      case 1:
        return [
          Demo4.getDistAlongSide(width),
          0,
        ];
      case 2:
        return [
          width,
          Demo4.getDistAlongSide(height),
        ];
      default: return undefined;
    }
  }

  static getColor(base, range) {
    return base + Math.floor(Math.random() * range + 1);
  }

  paint(ctx, { width, height }, props) { // eslint-disable-line
    const rays = props.get('--rays');

    ctx.fillStyle = 'rgb(189, 196, 224)';
    ctx.fillRect(0, 0, width, height);

    const ctr = [
      width * Math.random(),
      height + 109,
    ];

    for (let i = 0; i < rays; i += 1) {
      const endSide = i % 3;
      ctx.beginPath();
      ctx.moveTo(...ctr);
      ctx.lineTo(...Demo4.getPoint(endSide, width, height));
      ctx.lineWidth = Demo4.getWidth();
      ctx.lineCap = 'round';
      ctx.strokeStyle = `rgba(${Demo4.getColor(155, 100)}, ${Demo4.getColor(120, 100)}, ${Demo4.getColor(30, 120)}, .07)`;
      ctx.stroke();
    }
  }
}
registerPaint('demo4', Demo4); // eslint-disable-line
