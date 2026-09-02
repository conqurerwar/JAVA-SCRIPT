# Introduction to JavaScript

## What is JavaScript?

JavaScript is a **programming language** commonly used to make web pages
interactive and dynamic.

HTML is used to create the structure of a webpage, CSS is used to style
that webpage, and JavaScript is used to add **behavior and
functionality**.

### Example

With JavaScript, a webpage can:

-   Respond when a user clicks a button
-   Change content on the page
-   Show or hide elements
-   Validate forms
-   Perform calculations
-   Create animations and interactive features
-   Communicate with web servers

------------------------------------------------------------------------

## JavaScript in Web Development

The three core technologies of front-end web development are:

  Technology       Main Purpose
  ---------------- ----------------------------
  **HTML**         Structure and content
  **CSS**          Styling and layout
  **JavaScript**   Behavior and interactivity

Think of a webpage like a house:

-   **HTML** → the structure of the house
-   **CSS** → the appearance and decoration
-   **JavaScript** → the actions and functionality

------------------------------------------------------------------------

## Where JavaScript Can Run

JavaScript is most commonly associated with web browsers, but it can
also run outside the browser.

For example, **Node.js** allows JavaScript to run on a computer or
server.

This means JavaScript can be used for:

-   Front-end web development
-   Back-end development
-   Web applications
-   APIs
-   Server-side programs
-   Automation and scripting

------------------------------------------------------------------------

## Why Learn JavaScript?

JavaScript is an important language for web development because it
allows developers to build interactive applications rather than static
webpages.

Learning JavaScript also introduces important programming concepts such
as:

-   Variables
-   Data types
-   Functions
-   Conditions
-   Loops
-   Objects
-   Arrays
-   Events
-   Asynchronous programming

------------------------------------------------------------------------

## First JavaScript Example

A simple JavaScript statement can display a message in the browser
console:

``` javascript
console.log("Hello, World!");
```

`console.log()` is commonly used to print information to the console
while developing and debugging JavaScript programs.

------------------------------------------------------------------------

## Key Takeaways

-   JavaScript is a programming language.
-   It adds behavior and interactivity to webpages.
-   HTML provides structure.
-   CSS provides styling.
-   JavaScript provides functionality.
-   JavaScript can also be used outside the browser with environments
    such as Node.js.
-   JavaScript is one of the fundamental technologies for modern web
    development.

------------------------------------------------------------------------

## Next Topic

After understanding the introduction to JavaScript, the next important
concept to learn is:

**Variables**

---

## Common JavaScript Basics

### `console.log()`

`console.log()` is used to display information in the **browser's developer console**.

```javascript
console.log("Hello, World!");
console.log(123);
```

It is useful for checking values and debugging JavaScript code.

---

### `window.alert()`

`window.alert()` displays a popup message to the user.

```javascript
window.alert("Hello, World!");
```

The `window` object represents the browser window. Because `window` is the global object in a browser, `alert()` can also be written as:

```javascript
alert("Hello, World!");
```

---

### `document.getElementById()`

`document.getElementById()` is used to find an HTML element by its `id`.

#### HTML

```html
<p id="message">Hello</p>
```

#### JavaScript

```javascript
document.getElementById("message").textContent = "Hello, JavaScript!";
```

In this example, JavaScript finds the element whose `id` is `message` and changes its text.

> **Note:** The correct method name is `getElementById()`.

---

## Comments

Comments are notes written inside code for developers. JavaScript ignores comments when executing the program.

### Single-Line Comment

Use `//` for a single-line comment:

```javascript
// This is a single-line comment
console.log("Hello");
```

### Multi-Line Comment

Use `/* ... */` for a multi-line comment:

```javascript
/*
  This is a
  multi-line comment.
*/
console.log("Hello");
```

Comments are useful for explaining code and temporarily disabling code while testing.

---

## Quick Reference

| JavaScript | Purpose |
|---|---|
| `console.log()` | Prints information to the browser console |
| `window.alert()` | Displays a popup message |
| `document.getElementById()` | Selects an HTML element using its `id` |
| `//` | Creates a single-line comment |
| `/* ... */` | Creates a multi-line comment |
