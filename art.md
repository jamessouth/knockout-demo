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

In my first article on the new CSS Paint (Houdini) API, I covered three use cases for Houdini along with using the polyfill and building with webpack.  Today I want to discuss combining Houdini with knockout text techniques to easily create attractive, generative text effects.  Since I have already covered the polyfill, I have chosen not to use it for this article's demos, so they only work in Chrome; other browsers will just show a black fallback.  The repo for this article is here.

Knockout text is a set of techniques where the text content of an element is cut out, revealing the background behind it, thereby giving color to the letters so that the text contrasts with the foreground and can be read.  In web development, there are several ways to achieve knockout text; I went with using the `background-clip` CSS property as it is (now) widely supported, simple, and accessible.  Check out my 15 Puzzle Generator to see another knockout technique using images, pseudo content and the `mix-blend-mode` CSS property, and the accessibility hack (a tiny, invisible `<h1>` tag) that was subsequently required.  The demos for this article are live here.

##The Simple Markup

```html
  <!-- index.html -->
  <body>
    <h2>Claude Monet</h2>
    <h2>102 Colored Stripes</h2>
    <h2>85 Colored Spheres</h2>
  </body>
  <style>
    h2{
      background-image: linear-gradient(black, black);
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

##The Rest of the Styles

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
  color: transparent;
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
  //of few dark gaps
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

Pretty simple styles, just some basic flexboxing on the body then some typical text styling for the `<h2>`s, each of which has a CSS custom property that we will use in their respective worklets.  What creates the knockout text is the transparent text color (the background will only be visible to the extent the text color is transparent) and the `background-clip: text` property (limits the appearance of the background image to the area of the text), which must be prefixed in most browsers.

Properties like `line-height`, `width`, and `font-size` (and also `padding` and `border`) affect the dimensions that are used in the paint worklet to draw the background and the placement of the text over it.  What we want to achieve is complete coverage of the text with as little excess background as possible, since that is wasted paint work, while still maintaining our desired visual effect.  
