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
- The fr unit, is a measurement of the amount of free space available for a row or column to stretch. It is very similar to the flex-grow property. the fractional unit tells an item how much extra space to take up. A value of 1fr means that the columns will take up an equal number of available space. Whereas a higher number, like 2fr, means that it will take up twice as much available space.
- Having a hard time gettin the rows to to be implicit because the hero image takes up so much space if you do an auto-fill/auto-fit option. End up with `grid-template-rows: 100px repeat(3, minmax(30px, auto));
` The first row has to be contrained to hold both the header logo and the hero image.
- Not sure how wise it is to contrain that first row to 100px.
- Not loving the look of the mobile image at viewport sizes > 375px as it doesn't stretch at all. So I added ` grid-template-columns: minmax(150px, 400px);` to the grid container to keep everything the same size so the image didn't look out of place.
- First mistake I made was that I had what should be the header inside the `<main>` section. Took logo out and put into `<header>`. This broke my layout but in a good way!
- Not sure what to do with the hero image yet. I could make it an `<aside>` or keep it in grid container. If in an `<aside>` then I don't have to have the alt tage with the despriction as being in an aside means it is not important for the user of a screen reader to know about.

Input/Form

- Used a simple `<input>` with the `type = "email"`, `pattern = ".+@globex\.com"`, and a `size = 31 ` to accomomate longer email addresses with more characters.
- Understand that to be accessible a label must also accompany the input field. The design does not call for a visual label. Researched how to add a label that a screen reader will pick up but is visually hidden.

**Reminder that if you just do a display: none or a visibilty: hidden the screen reader will also ignore that element.**

Adding a class like this seems to be the way to go.

```
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

### Continued development

### Useful resources

- [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
- [Average Email Address Length](https://www.atdata.com/blog/long-email-addresses#:~:text=So%20over%20the%20last%20few,show%20at%20least%2031%20characters.)
- [Input for email address](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
- [Hiding Labels](https://www.w3.org/WAI/tutorials/forms/labels/#hiding-the-label-element)
- [Inputs and Labels](https://css-tricks.com/html-inputs-and-labels-a-love-story/)
- [Input Name Attribute](https://www.w3schools.com/tags/att_input_name.asp)

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Frontend Mentor - [@amyspencerproject](https://www.frontendmentor.io/profile/amyspencerproject)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
