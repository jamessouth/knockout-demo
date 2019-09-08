const demo = document.title.match(/\d/)[0];

if (CSS.paintWorklet) {
  switch (demo) {
    case '1':
      import(/* webpackChunkName: "demo1scss" */ '../css/demo1.scss').then(() => CSS.paintWorklet.addModule('./demo1.min.js'));
      break;
    case '2':
      import(/* webpackChunkName: "demo2scss" */ '../css/demo2.scss').then(() => CSS.paintWorklet.addModule('./demo2.min.js'));
      break;
    case '3':
      import(/* webpackChunkName: "demo3scss" */ '../css/demo3.scss').then(() => {
        CSS.paintWorklet.addModule('./demo3a.min.js');
        CSS.paintWorklet.addModule('./demo3b.min.js');
        CSS.paintWorklet.addModule('./demo3c.min.js');
        CSS.paintWorklet.addModule('./demo3d.min.js');
      });
      break;
    case '4':
      import(/* webpackChunkName: "demo4scss" */ '../css/demo4.scss').then(() => CSS.paintWorklet.addModule('./demo4.min.js'));
      break;
    default:
      import(/* webpackChunkName: "demo2scss" */ '../css/demo2.scss').then(() => CSS.paintWorklet.addModule('./demo2.min.js'));
  }
} else {
  import(/* webpackChunkName: "css-paint-polyfill" */ 'css-paint-polyfill').then(() => {
    switch (demo) {
      case '1':
        import(/* webpackChunkName: "demo1scss" */ '../css/demo1.scss').then(() => CSS.paintWorklet.addModule('./demo1.min.js'));
        break;
      case '2':
        import(/* webpackChunkName: "demo2scss" */ '../css/demo2.scss').then(() => CSS.paintWorklet.addModule('./demo2.min.js'));
        break;
      case '3':
        return undefined;
      case '4':
        import(/* webpackChunkName: "demo4scss" */ '../css/demo4.scss').then(() => CSS.paintWorklet.addModule('./demo4.min.js'));
        break;
      default: return undefined;
    }
    return undefined;
  });
}
