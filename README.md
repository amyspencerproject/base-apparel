# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)

### Links

- Github Repo URL: [Base Apparel Repo](https://github.com/amyspencerproject/base-apparel)
- Live Site URL: [Base Apparel Page](https://amyspencerproject.github.io/base-apparel/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Variables
- CSS Grid
- Mobile-first workflow

### What I learned

- I am opting to go with a grid layout for this challenge. I think that it will be easy to make a the transition from mobile view with the hero image below the log and above the header to the desktop view. In the desktop view the hero image takes up the entire right hand side of the design and while the vertical stack of all the other elements slide to the left hand side.
- I did put a div with a class of grid-container around the elements just to keep things out to the main elements where styling should be minimal.
- Used a simple linear gradient for the background. Applied this to the body so it covered everything.
- To achive the line breaks in the header used a `<span>` with class of break, `.break { display: block; }`
- Added more structure to grid layout in desktop view with 2 columns and 4 rows. Need to use minmax and hopefully auto-fill to get the content decent looking.
- The fr unit, is a measurement of the amount of free space available for a row or column to stretch. It is very similar to the flex-grow property. the fractional unit tells an item how much extra space to take up.

Fractional units are helpful for divvying up the extra space in a grid container without declaring a specific width or height. You can use the fractional unit as a value for the grid-template-columns or grid-template-rows properties:

1
grid-template-columns: 200px 1fr 1fr;
A value of 1fr means that the columns will take up an equal number of available space. Whereas a higher number, like 2fr, means that it will take up twice as much available space.

### Continued development

### Useful resources

- [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
-

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Frontend Mentor - [@amyspencerproject](https://www.frontendmentor.io/profile/amyspencerproject)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
