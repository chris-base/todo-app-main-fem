# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

Your challenge is to build out this todo app and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./public/todo-app-main-screenshot.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/todo-app-chris-base-ryglevc7q)
- Live Site URL: [Live Site](https://chris-base.github.io/todo-app-main-fem/)

## My process

Started with layout of app. Made layouts work on both desktop and mobile screen sizes. Made dark/light toggle button. Functionality of adding tasks to the list was added, and drag and drop functionality.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

One of the main things I've done was the drag and drop feature. This was interesting because the way I implemented it was getting the y of the element being moved, and gettind the difference to where the cursor was lifted to move the element to. Then moving the task to the position in the array of tasks based on how far the cursor had moved, and updating the DOM.

## Author

- Website - [Chris Base](https://github.com/chris-base/)
- Frontend Mentor - [@chris-base](https://www.frontendmentor.io/profile/chris-base)
