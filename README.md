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

- I am opting to go with a grid layout for this challenge. I think that it will be easy to make a the transition from mobile view with the hero image below the logo and above the header to the desktop view. In the desktop view the hero image takes up the entire right hand side of the design and while the vertical stack of all the other elements slide to the left hand side.
- I did put a div with a class of grid-container around the elements just to keep things out to the main elements where styling should be minimal.
- Used a simple linear gradient for the background. Applied this to the body so it covered everything.
- To achive the line breaks in the header used a `<span>` with class of break, `.break { display: block; }`
- Added more structure to grid layout in desktop view with 2 columns and 4 rows. Need to use minmax and hopefully auto-fill to get the content decent looking.
- The fr unit, is a measurement of the amount of free space available for a row or column to stretch. It is very similar to the flex-grow property. the fractional unit tells an item how much extra space to take up. A value of 1fr means that the columns will take up an equal number of available space. Whereas a higher number, like 2fr, means that it will take up twice as much available space.
- Had a difficult time with the HTML structure I initially put together. Body > Main > Grid Container > (everything including the logo and hero image!) Stuggled with gettin the rows to to be implicit because the hero image takes up so much space if you do an auto-fill/auto-fit option. End up with `grid-template-rows: 100px repeat(3, minmax(30px, auto));` The first row has to be contrained to hold both the header logo and the hero image. It wasn't working out well at all.
- Then I read some of the feedback from Grace given to others on this challenge and made quite a few changes.
- First mistake I made was that I had what should be the header inside the `<main>` section. Took logo out and put into `<header>`. This broke my layout but in a good way!
- Not sure what to do with the hero image yet. I could make it an `<aside>` or keep it in grid container. If in an `<aside>` then the screen reader will annouce to the user that this is a complementary image. Or I could chose to not let the screen reader users know about the image and not describe it but then I would leave in in `<main>`.
- Made the body under the grid format and then positioned header, aside, main, and footer. In the mobile view this meant letting everything auto positon. For the desktop view the format is 2 columns and 4 rows.
- Had the same issue where the hero image was making the 1st row super tall. Thought that using `grid-auto-rows: min-content;` would fixt this but no winner yet.
- Just left grid-template-rows off altogether for the time being.
- Also noted that the `<header>` says it is causing an overflow.

  ![](./Screenshot%20header%20overflow.png)

  This could be why the spacing for the rows is still large. Not understanding why the 1st row has so much vertical spacing.

Input/Form

- Used a simple `<input>` with the `type = "email"`, `pattern = ".+@globex\.com"`, and a `size = 31 ` to accomomate longer email addresses with more characters.
- Understand that to be accessible a label must also accompany the input field. The design does not call for a visual label. Researched how to add a label that a screen reader will pick up but is visually hidden.

**Reminder** that if you just do a display: none or a visibilty: hidden the screen reader will also ignore that element.

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

- When adding a linear gradient to a button you have to call it a `background-image` not a `background-color`.
- Do not know how to center the arrow image in the button. StackOver flow suggested that `text-align: center` would work but it did not. Asked for help on FEB Discord and the solution was to put the button under `flex` and then `justify-content: center`.

- Styled the focus border that shows up when you click on a input field. The default is blue.

JavaScript

- Found the Regular Expression (Regex) for validating email addresses. You can have a lot of different charactors but must have the @ followed by a domain name
- Removed the one I had in the HTML for the `<input />`, `pattern=".+@globex\.com"`

### Continued development

### Useful resources

- [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
- [Average Email Address Length](https://www.atdata.com/blog/long-email-addresses#:~:text=So%20over%20the%20last%20few,show%20at%20least%2031%20characters.)
- [Input for email address](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
- [Hiding Labels](https://www.w3.org/WAI/tutorials/forms/labels/#hiding-the-label-element)
- [Inputs and Labels](https://css-tricks.com/html-inputs-and-labels-a-love-story/)
- [Input Name Attribute](https://www.w3schools.com/tags/att_input_name.asp)
- [Buttons w/ Gradients] (https://html-online.com/articles/gradient-background-buttons-css-html/)
- [Regex Email Validator](https://www.w3resource.com/javascript/form/email-validation.php)
- [Placeholder Styling](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder)
- [Outline](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
- [input:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Frontend Mentor - [@amyspencerproject](https://www.frontendmentor.io/profile/amyspencerproject)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
