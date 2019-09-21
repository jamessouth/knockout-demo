class Demo3 {
  static get inputProperties() { return ['--spheres']; }

  static getRandomPoint(width, height) {
    return [
      Math.floor(Math.random() * (width)),
      Math.floor(Math.random() * (height)),
    ];
  }

  static getColor(base, range) {
    return base + Math.floor(Math.random() * range);
  }

  static makeColor() {
    return [
      Demo3.getColor(0, 256),
      Demo3.getColor(0, 256),
      Demo3.getColor(0, 256),
    ];
  }

  paint(ctx, { width, height }, props) { // eslint-disable-line
    const spheres = props.get('--spheres');

    ctx.fillStyle = 'rgb(10, 10, 10)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < spheres; i += 1) {
      const radius = Demo3.getColor(4, 60);
      const [x, y] = Demo3.getRandomPoint(width + 1, height + 1);
      const [r, g, b] = Demo3.makeColor();
      const radgrad = ctx.createRadialGradient(x, y, 0, x + (radius / 4), y + (radius / 4), radius);
      radgrad.addColorStop(0, '#ffffff');
      radgrad.addColorStop(0.99, `rgba(${r}, ${g}, ${b}, 1)`);
      radgrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = radgrad;
      ctx.fillRect(0, 0, width, height);
    }
  }
}
registerPaint('demo3', Demo3); // eslint-disable-line
