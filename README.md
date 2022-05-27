# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)

  - [Links](#links)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [https://github.com/rendongzha/faq-accordion-card](https://github.com/rendongzha/faq-accordion-card)
- Live Site URL: [https://faq-accordion-card-katherine.netlify.app/](https://faq-accordion-card-katherine.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

- use overflow:hidden on the container to crop images outside the container
- position:absolute will make the element ignored in the normal work flow
- event delegation is a good practice when having multiple clickable items
- combine window.matchMedia() and its property matches with eventlistener on change will make the page responsive

### Continued development

- practical use of the DRY principle
- easier way of show/hide an answer when a question is clicked (my logic is check if the answer is shown, if true, hide it, otherwise show the answer)

### Useful resources

- [https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/change_event](https://www.example.com) After addListener is deprecated, we need to use addEventListener on a window.matchMedia() object when change event is captured

## Author

- Website - [Katherine Zha](https://github.com/rendongzha/faq-accordion-card)
- Frontend Mentor - [@Katherine](https://www.frontendmentor.io/profile/katherinegreen)
