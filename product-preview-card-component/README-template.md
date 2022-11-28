# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

[mobile-view](./images/screenshot-mobile-view.png)
[desktop-view](./images/screenshot-desktop-view.png)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

In this challenge, I got to try the picture element of html. It allows for a responsive web design.

I also learned to center the design using flexbox thanks to the tip given to me from a mentor. It really did make my design a little bit better.

I also learned about proper styling of images. The images should have a display of block as originally it is inline. If display is left in default(inline), this would case the image not properly alligning with the parent container and would show up as a thin space below the image.

```html
<picture>
  <source
    srcset="images/image-product-desktop.jpg"
    media="(min-width: 760px)"
  />
  <img
    class="perfumeImage"
    src="images/image-product-mobile.jpg"
    alt="perfume-mobile"
  />
</picture>
```

```css
.perfumeImage {
  display: block;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
}
```

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I would want to learn more about proper layout techniques. I would also want to learn about css transitions as it greatly improves the interactivity of a website.

### Useful resources

- [w3schools](https://www.w3schools.com/) - This helped me search about the css properties I did not know and understand.
- [Stack Overflow](https://stackoverflow.com/) - This helped me understand about changing the display property of an image to block to avoid the thin space below an image.

## Author

- Frontend Mentor - [@jandoyaoen1](https://www.frontendmentor.io/profile/jandoyaoen1)
- Github - [@jandoyaoen1](https://github.com/jandoyaoen1)

## Acknowledgments

Thank you so much to Deniel Den for sharing me useful css tricks and best practices. This really helped me improve my layout skills a bit and has gotten me wanting to learn more.
