# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

[Newsletter Signup](./assets/images/finished.png)

### Links

- Solution URL: [Github](https://github.com/jandoyaoen1/Frontend-Mentor/tree/master/projects/newsletter-sign-up-with-success-message-main)
- Live Site URL: [janjanportfolio](https://janjanportfolio.netlify.app/projects/newsletter-sign-up-with-success-message-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla Javascriprt
- Flexbox
- Mobile-first workflow




### What I learned

The css property of clamp lets us design font sizes that can scale according to the size of the viewport.

When validation forms using js, a good practice is to use the disabled property of button for when not to be used scenarios.

```css
#emailSubmit {
  font-size: clamp(0.8rem, 1.2vw, 1.2rem);
}
```
```js
function displayer(email) {
  console.log(regex.test(email));
  if (regex.test(email)) {
    emailSubmit.disabled = false;
    emailSubmit.style.cursor = "pointer";
    errorMessage.style.display = "none";
    submit();
  } else {
    errorMessage.style.display = "block";
    emailSubmit.style.cursor = "not-allowed";
    emailSubmit.disabled = true;
  }
}
```


### Continued development

I would want to learn more about form validation techniques that are more secure and reliable.


### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - This helped me with the necessary html, css and JavaScript documentation.

## Author

- Website - [janjan portfolio](https://janjanportfolio.netlify.app/)
- Frontend Mentor - [Jan](https://www.frontendmentor.io/profile/jandoyaoen1)

## Acknowledgments

Thanks to Brad Traversy and his 50 projects in 50 days course in Udemy. This served as my reference.
