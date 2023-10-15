# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

[Age Calculator App](../age-calculator-app/assets/images/finished.png)


### Links

- Solution URL: [github](https://github.com/jandoyaoen1/Frontend-Mentor/tree/master/projects/age-calculator-app)
- Live Site URL: [netlify portfolio site](https://janjanportfolio.netlify.app/projects/age-calculator-app/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS

### What I learned

I used JavaScript heavily in this project and I learned about the JavaScript Date object

To see how you can add code snippets, see below:


```js
day > new Date(year, month, 0).getDate()
```
the code above evaluates wether a date's day is valid or not, this can also be used to detect for leap years

### Continued development

I would like to learn more about JavaScript


### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - This helped me with the general layout for the project
- [John Smilga](https://www.vanillajavascriptprojects.com/) - This is a very good resource for learning to dynamically load content on the html with vanilla js


## Author

- Website - [janjan](https://janjanportfolio.netlify.app)
- Frontend Mentor - [@jandoyaoen1](https://www.frontendmentor.io/profile/jandoyaoen1)


## Acknowledgments

Big thanks for Brad Traversy and John Smilga for sharing their knowledge in JavaScript. Their content on youtube and udemy helped me improve my JavaScript skills.
