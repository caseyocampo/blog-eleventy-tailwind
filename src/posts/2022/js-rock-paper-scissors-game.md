---
title: "How I Built a Rock, Paper, Scissors Game With Pure JavaScript, HTML, and CSS"
description:
tags: "post"
date: "2022-01-16"
permalink: "/posts/js-rock-paper-scissors-game/"
---

This post details how I built the classic childhood game Rock, Paper, Scissors. The game features the ability to add your name to the UI (user interface), play against a computer, display an updated UI that reflects the game outcome, and reset the game so you can play again.

The following sections will describe the HTML, CSS, and JavaScript files I used to create the game. More specifically, I’ll be covering semantic markup, media features in media queries, and an overview of JavaScript methods and features used.

**TL; want to play the game**: If you’re interested in playing the game, you can check it out on its <a href="https://caseyocampo.github.io/js-rock-paper-scissors/" target="_blank">GitHub page {% newtab %}</a>.

## The HTML Structure

In this section, I’ll be focusing on the semantic HTML tags I used for the Rock, Paper, Scissors game and how I optimized this project for web accessibility.

Now, I’m not sure how many screen-reader users would be visiting a Snake Game site, but that doesn’t mean building for web accessibility should go out the window.

## Semantic HTML Tags

The following tags are what I used to implement a more semantic web experience for users who rely on assistive technology devices such as screen readers. In this particular project, there aren’t many since it has little content, but it is always good practice to get in the habit of writing semantic tags where possible.

The tags I used for this project are: `<header>`, `<h1>`, `<main>`, `<h2>`, `<p>`, `<button>`, `</code>`

Using the above HTML tags gives assistive device users a more descriptive web experience. It also helps other developers (and future you) navigate code.

In my experience, when being onboarded onto a project, getting familiar with the files and where things are is critical to being able to confidently accept and execute tasks.

What I am trying to say here is writing semantically is a win-win for everyone! By being proactive about your HTML element choices, you set everyone up for success.

Another thought to consider is the use of semantic block-level elements such as the `<header>` and `<main>` HTML tags.

The `<header>` tag is used to contain introductory content such as a website title or main navigation links, often times a logo is included as well. The `<main>` tag’s purpose is to contain the primary or main content of the page.

In regards to the Rock, Paper, Scissors game, the header element contains only the title of the project which uses the `<h1>` tag. Note: there should only be one h1 tag per page as this provides screen reader users with a sensible content hierarchy to read from.

The moral of the story is if you find yourself writing HTML for these types of content, give the screen reader explicit context by choosing semantic tags over, say, a generic `<div>` tag.

## How I Made It Responsive

In this section, I’ll highlight the three different responsive media features (max-width, max-height, and orientation) use in my media queries in the Rock, Paper, Scissors game.

### Max Width and Max Height

The `max-width` and `max-height` media features function similarly. They only differ in regards to the x and y-axis they are targeting.

The following media query uses the `max-width` media feature to target screen sizes that have a width (on the x-axis) of 570px and under and will apply responsive CSS code to it.

Here are a couple of examples.

```
@media (max-width: 570px) {
// responsive CSS code goes here
}
```

Here’s the same above example but with some pseudocode written for CSS rules:

```
@media (max-width: 570px) {
// set smaller font size
// set container element's to display columns
}
```

The media query above has pseudocode written that sets a smaller font size and displays columns for selected elements on screen sizes at and under 570px.

The max-height media feature functions similarly, only for the height (on the y-axis) of screens.

### Orientation

The orientation media feature is used to target the orientation of a screen or viewport. There are only two values you can set for the orientation: landscape or portrait.

In the Rock, Paper, Scissors game, I combined the orientation and `max-height` media features to target screens that are landscape orientated and that have a `max-height` of 680px. Doing this allowed me to set custom CSS rules so that the UI fits on the screen neatly.

Here’s what that looks like:

```css
@media (orientation: landscape) and (max-height: 680px) {
  // responsive CSS code goes here
}
```

Read more on the [orientation media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation).

## JavaScript Features and Methods Used

In this section, I’ll be stating the JavaScript features and methods used to create the Rock, Paper, Scissors game.

This part can simply be referred to as a list of what I used as going into detail for each of these items would make this post unnecessarily long and the folks at MDN Web Docs and W3Schools have already done an incredible job are documenting and teaching these subjects at length.

JavaScript methods:

- .getElementById()
- .getElementByClassName()
- .classList.add()
- .classList.remove()
- .addEventListener()
- .length
- .textContent
- Math.floor()
- Math.random()

JavaScript features:

- Named and anonymous functions
- Targeting and updating element display properties
- Logical operators AND && and OR ||
- Ternary operators
- Template literals

## Check Out the HTML, CSS, and JavaScript Files

For a full view of the project code, feel welcome to [visit the project repository on GitHub](https://github.com/caseyocampo/js-rock-paper-scissors).

That said, thanks for reading! I hope this write-up was helpful. Furthermore, I am always looking to advance my developer skills and welcome constructive feedback on how this project could be improved. If you feel inclined to do so, [get in touch](/contact/) or send me a message on <a href="https://www.linkedin.com/in/caseyocampo/" target="_blank">LinkedIn {% newtab %}</a>.
