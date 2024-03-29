# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

[Finished Project](./images/finished.png)

### Links

- Solution URL: [github](https://github.com/jandoyaoen1/Frontend-Mentor/tree/master/projects/expenses-chart-component-main)
- Live Site URL: [Live Site](https://janjanportfolio.netlify.app/projects/expenses-chart-component-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- Mobile-first workflow


### What I learned

I maily learned about using JSON to load content dynamically on to index.html

```js
const fetchData = async() => {
    try {
        const resp = await fetch("data.json");
        const data = await resp.json();
        // console.log()
        return data;
    } catch (error) {
        console.error("error loading json file", error)
    }
}
```

### Continued development

I would like to practice more on my workflow. I want to make it faster and efficient.


### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - This helped me with the general layout for the project
- [John Smilga](https://www.vanillajavascriptprojects.com/) - This is a very good resource for learning to dynamically load content on the html with vanilla js

## Author

- Website - [janjan](https://janjanportfolio.netlify.app)
- Frontend Mentor - [@jandoyaoen1](https://www.frontendmentor.io/profile/jandoyaoen1)

## Acknowledgments

Thanks to John Smilga for his vanilla js projects. This helped me so much in completing this project and understanding about javascript.
