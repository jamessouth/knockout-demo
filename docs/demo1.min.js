class Demo1 {
  static get inputProperties() { return ['--stars']; }

  static getDistAlongSide(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  static getWidth() {
    return Math.floor(Math.random() * 10) + 1;
  }

  static getPoint(side, width, height) {
    switch (side) {
      case 0:
        return [
          0,
          Demo1.getDistAlongSide(height),
        ];
      case 1:
        return [
          Demo1.getDistAlongSide(width),
          height,
        ];
      case 2:
        return [
          width,
          Demo1.getDistAlongSide(height),
        ];
      case 3:
        return [
          Demo1.getDistAlongSide(width),
          0,
        ];
      default: return undefined;
    }
  }

  static getColor(base, range) {
    return base + Math.floor(Math.random() * range + 1);
  }

  static getTransparency() {
    return Math.floor(Math.random() * 100 + 1) / 100;
  }

  paint(ctx, { width, height }, props) { // eslint-disable-line
    const stars = props.get('--stars');

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < stars; i += 1) {
      ctx.fillStyle = `rgba(255, 255, 255, ${Demo1.getTransparency()})`;
      ctx.fillRect(Demo1.getDistAlongSide(width), Demo1.getDistAlongSide(height), 1, 1);
    }

    const ctr = [
      width / 2,
      height + 2,
    ];

    for (let i = 0; i < 700; i += 1) {
      const endSide = i % 4;
      ctx.beginPath();
      ctx.moveTo(...ctr);
      ctx.lineTo(...Demo1.getPoint(endSide, width, height));
      ctx.lineWidth = Demo1.getWidth();
      ctx.lineCap = 'square';
      ctx.strokeStyle = `rgba(${Demo1.getColor(240, 15)}, ${Demo1.getColor(240, 15)}, ${Demo1.getColor(50, 20)}, .05)`;
      ctx.stroke();
    }
  }
}
registerPaint('demo1', Demo1); // eslint-disable-line
