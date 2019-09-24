https://www.claudemonetgallery.org/Haystacks-Overcast-Day.html


---
title: Generating Knockout Text with the CSS Paint (Houdini) API
published: false
description: Using JS to draw knockout text backgrounds
tags: CSS, JavaScript, Paint, Houdini
cover_image: https://raw.githubusercontent.com/jamessouth/knockout-demo/master/images/title.png
canonical_url:
series: CSS Paint (Houdini) Series No. 2
---

In my [first article](https://dev.to/jamessouth/generating-shapes-and-images-with-the-css-paint-houdini-api-29c) on the new [CSS Paint (Houdini) API](https://developer.mozilla.org/en-US/docs/Web/Houdini), I covered three use cases for Houdini along with polyfilling non-supporting browsers and building with webpack.  Today I want to discuss combining Houdini with knockout text techniques to easily create attractive, generative text effects.  Since I have already covered the polyfill, I have chosen not to use it for this article's demos, so they only work in Chrome; other browsers will just show a black fallback.  The repo for this article is here:{% github jamessouth/knockout-demo no-readme %}

Knockout text is a visual effect where the text content of an element is cut out, revealing the background behind it, thereby giving color to the letters so that they contrast with the foreground and can be read.  In web development, there are several ways to achieve knockout text; I went with using the `background-clip: text` CSS property as it is [widely supported](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility)(prefixed), simple, and accessible.  Check out my [15 Puzzle Generator](https://jamessouth.github.io/fifteen-puzzle-generator/home) to see another knockout technique using images, pseudo content and the [`mix-blend-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) CSS property, and the accessibility hack (a tiny, invisible `<h1>` tag) that was subsequently required.  The demos for this article are [live here](https://jamessouth.github.io/knockout-demo/).

##The Markup

```html
  <!-- index.html -->
  <body>
    <h2>Claude Monet</h2>
    <h2>102 Colored Stripes</h2>
    <h2>85 Colored Spheres</h2>
  </body>
  <style>
    h2{
      background-image: linear-gradient(black, black);// fallback
    }
    h2:first-of-type{
      background-image: paint(demo1);
    }
    h2:nth-of-type(2){
      background-image: paint(demo2);
    }
    h2:last-of-type{
      background-image: paint(demo3);
    }
  </style>
```
<figcaption><a href="https://github.com/jamessouth/knockout-demo/blob/master/src/html/index.html">index.html</a></figcaption>

Here we just have three `<h2>` tags with our text, as you might see in a real document.  Throw on an `<h1>` for a page title and this is accessible to screen readers as a set of level 2 headings.  The `<style>` tag for calling our `paint` worklets is needed to work around an apparent caching issue as discussed in my previous article.  

##The Styling

```scss
//demo.scss
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  display: flex;
  background: #fbfbfb;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
h2{
  color: transparent;// can be anything but background only visible to extent transparent
  font-size: 68px;
  background-clip: text;
  -webkit-background-clip: text;// must be prefixed
  text-align: center;
  line-height: 76px;
  font-weight: 500;
  margin: .3em .25em;
}
h2:first-of-type{
  --brushstrokes: 3825;
  font-family: 'Dr Sugiyama', cursive;
  width: 60%;// reduces paint area when text takes 2 lines to maintain desired visual effect
  //of just a few dark gaps in the 'hay'
}
h2:nth-of-type(2){
  --stripes: 102;
  font-family: 'Amarante', cursive;
  line-height: 78px;// without this the descender of the 'p' gets cut off
}
h2:last-of-type{
  --spheres: 85;
  font-family: 'Limelight', cursive;
}
@media screen and (min-width: 450px){
  h2{
    font-size: 88px;
    line-height: 96px;
    max-width: 501px;// otherwise paint area would extend across viewport, requiring more
//objects to be drawn in our worklet to get the desired effect
    margin: .4em 0;
  }
  h2:first-of-type{
    width: 450px;// otherwise the cross-stroke of the 't' gets cut off
  }
  h2:nth-of-type(2){
    line-height: 102px;// also used to preserve the descender of the 'p'
  }
}
@media screen and (min-width: 775px){
  h2:nth-of-type(2){
    max-width: initial;// allows to expand as one line across viewport
  }
}
@media screen and (min-width: 942px){
  h2{
    margin: .5em 0;
  }
  h2:last-of-type{
    max-width: initial;// allows to expand as one line across viewport
  }
}

```
<figcaption><a href="https://github.com/jamessouth/knockout-demo/blob/master/src/css/demo.scss">demo.scss</a></figcaption>

Pretty simple styles, just some basic flexboxing on the body then some typical text styling for the `<h2>`s, each of which has a CSS custom property that we will use in their respective worklets.  What creates the knockout text effect is the transparent text color (the background will only be visible to the extent the text color is transparent) coupled with the `background-clip: text` property (limits the appearance of the background image to the area of the text), which must be prefixed in most browsers.

Properties like `line-height`, `width`, and `font-size` (and also `padding` and `border`) affect the dimensions that are used in the paint worklet to draw the background, and also the placement of the text over it.  We want the following:

1. A background big enough to completely cover the text...
2. ...and no bigger.  

Any text not covered by the background will just have the text color, including fully transparent, so the background should be large enough to fully contain the text you want to knockout.  On the other hand, if our background size far exceeds the area of the text, our worklet is doing a lot of work that is not being used to show the text, which is sub-optimal and could really be a problem if you animate the background.  By taking a few simple steps to minimize the background size while still containing the text, we can minimize our paint function's complexity and draw as much as possible in text areas that will be seen by the user.
##Demo 1

![Demo 1](https://raw.githubusercontent.com/jamessouth/knockout-demo/master/images/demo1.png)

Here I'm trying to recreate Monet's famous haystacks as seen, for example, in this painting.  By limiting the width of the background, I can keep the number of brushstrokes down to a reasonable 3,825.  If the background were wider, the brushstrokes would be diluted and more black would be visible, so more strokes would be required for the same look, increasing the complexity of the paint function.  I chose the Dr Sugiyama Google font to vaguely mimic Monet's signature.

```javascript
//(partial) demo1.js - static methods omitted, see link to file below
  paint(ctx, { width, height }, props) {
    const brushstrokes = props.get('--brushstrokes');

    ctx.fillStyle = 'rgb(30, 10, 0)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < brushstrokes; i += 1) {
      const [x, y] = Demo1.getRandomPoint(width, height);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Demo1.getXAdjustment(8), y + Demo1.getYAdjustment(28));
      ctx.lineWidth = Demo1.getWidth();
      ctx.strokeStyle = `rgba(
        ${Demo1.getNumber(201, 40)},
        ${Demo1.getNumber(148, 45)},
        ${Demo1.getNumber(102, 45)},
        ${Demo1.getNumber(70, 31) / 100}
      )`;
      ctx.stroke();
    }
  }
```
<figcaption><a href="https://github.com/jamessouth/knockout-demo/blob/master/src/js/demo1.js">demo1.js</a></figcaption>

Pretty simple, just looping through the number of brushstrokes from CSS and drawing a short line of 'hay' in a random straw color.
##Demo 2

![Demo 2](https://raw.githubusercontent.com/jamessouth/knockout-demo/master/images/demo2.png)

This one is also just a bunch of colored lines, very simple to do yet attractive visually.  

```javascript
//(partial) demo2.js - static methods omitted, see link to file below
  paint(ctx, { width, height }, props) {
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
      ctx.strokeStyle = `rgba(
        ${Demo2.getColor(16, 150)},
        ${Demo2.getColor(18, 150)},
        ${Demo2.getColor(12, 200)},
        ${Demo2.getTransparency()}
      )`;
      ctx.stroke();
    }
  }
```
<figcaption><a href="https://github.com/jamessouth/knockout-demo/blob/master/src/js/demo2.js">demo2.js</a></figcaption>

I chose the Amarante Google font because it is about the most Art Nouveau-style font they have.

> **Tip:**  On Google fonts you can only search font names, but if you want to search for a certain *style* of font (or anything that appears in the font descriptions but not the names), search the GitHub repo!  
##Demo 3

![Demo 3](https://raw.githubusercontent.com/jamessouth/knockout-demo/master/images/demo3.png)

For Demo 3 I experimented with drawing spheres (adapted from here) and I think it turned out great.  Just a little more complex than stripes but nothing too heavy.

```javascript
//(partial) demo3.js - static methods omitted, see link to file below
  paint(ctx, { width, height }, props) {
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
```
<figcaption><a href="https://github.com/jamessouth/knockout-demo/blob/master/src/js/demo3.js">demo3.js</a></figcaption>

Radial gradients in canvas drawing take two circles as arguments and then color stops are added.  You can then apply the gradient as either a fill style or a stroke style.
##Conclusion

Knockout text is a cool effect that is easy to implement accessibly and when we use Houdini to make the backgrounds, we can randomly generate attractive patterns to show through our knocked-out text as an alternative to having to load images as the background.  This technique works with the Houdini polyfill and can be used anywhere; the only limit is your imagination!  I hope you found this article useful and that you will please like and share with the world!
