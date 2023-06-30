# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


## Overview

This is an interactive rating component. It is created using html, css and JavaScript

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

[interactive rating component](./design/finished.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I first search on the internet for solutions. After reviewing the solutions, I came up with my own solution for the componennt. I combined what I learned from the available solutions.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I had a review about html, css and javascript from this project. I am proud of the code snippets below.



```css
.thankYouMessage:has(a:hover) {
    background-color: var(--orange);
}
```
```js
submit.addEventListener("click", () => {
    if(value) {
        userInput.textContent = value;
        switchDisplay();
        
    } else {
        console.log("no value");
        blurp.textContent = "OOOPS!";
        thankYouParagraph.textContent = "You seem to have forgotten to rate us. Click the link above to redo our survey.";
        thankYouMessage.innerHTML = "";
        thankYouMessage.appendChild(link);
        switchDisplay();

    }
})
```


### Continued development

For my next projects, I will want to have to practice more form control and DOM manipulation techniques.


### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - This helped me with the necessary html, css and JavaScript documentation.

## Author

- Website - [janjan portfolio](https://janjanportfolio.netlify.app/)
- Frontend Mentor - [Jan](https://www.frontendmentor.io/profile/jandoyaoen1)

## Acknowledgments

Thanks to Tân Tîng-huē and Alekususenpai for their solutions. I have copied heavily from their code.
