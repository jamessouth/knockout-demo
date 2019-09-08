import '../css/demo.scss';

if (CSS.paintWorklet) {
  CSS.paintWorklet.addModule('./demo1.min.js');
  CSS.paintWorklet.addModule('./demo2.min.js');
  CSS.paintWorklet.addModule('./demo3.min.js');
  CSS.paintWorklet.addModule('./demo4.min.js');
} else {
  import(/* webpackChunkName: "css-paint-polyfill" */ 'css-paint-polyfill').then(() => {
    CSS.paintWorklet.addModule('./demo1.min.js');
    CSS.paintWorklet.addModule('./demo2.min.js');
    CSS.paintWorklet.addModule('./demo3.min.js');
    CSS.paintWorklet.addModule('./demo4.min.js');
  });
}
