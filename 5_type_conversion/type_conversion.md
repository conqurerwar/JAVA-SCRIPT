# Type Conversion in JavaScript

## Introduction

Type conversion is the process of changing a value from one data type to another. JavaScript provides built-in functions that allow developers to convert values into numbers, strings, or booleans when needed.

Understanding type conversion is important because user input, calculations, comparisons, and form handling often require specific data types.

---

## What is Type Conversion?

Type conversion means transforming a value from one data type into another.

Common conversions include:

- String → Number
- Number → String
- String → Boolean
- Number → Boolean

JavaScript provides three main functions for explicit conversion:

```javascript
Number()
String()
Boolean()
```

---

## Why is Type Conversion Important?

User input from HTML forms and prompts is usually received as a string.

Example:

```javascript
let age = window.prompt("Enter your age");
console.log(typeof age);
```

Output:

```text
string
```

Even if the user enters a number, JavaScript treats it as text.

To perform mathematical operations, the value must be converted to a number.

---

## Converting Strings to Numbers

Use the `Number()` function to convert a value into a numeric data type.

```javascript
let age = "25";

age = Number(age);

console.log(age);
console.log(typeof age);
```

Output:

```text
25
number
```

---

## Why Convert to a Number?

Without conversion:

```javascript
let age = "25";

age = age + 1;

console.log(age);
```

Output:

```text
251
```

JavaScript combines the values as strings.

After conversion:

```javascript
let age = "25";

age = Number(age);

age = age + 1;

console.log(age);
```

Output:

```text
26
```

Now JavaScript performs mathematical addition.

---

## Converting Values to Strings

The `String()` function converts a value into text.

```javascript
let score = 100;

score = String(score);

console.log(score);
console.log(typeof score);
```

Output:

```text
100
string
```

---

## When to Use String Conversion

String conversion is useful when:

- Displaying values on a webpage
- Creating messages
- Combining text with variables

Example:

```javascript
let price = 50;

price = String(price);

console.log("Price: " + price);
```

---

## Converting Values to Boolean

The `Boolean()` function converts values into either:

```text
true
false
```

---

## Truthy and Falsy Values

JavaScript treats some values as **truthy** and others as **falsy**.

### Falsy Values

```javascript
Boolean(0)
Boolean("")
Boolean(null)
Boolean(undefined)
Boolean(NaN)
```

Output:

```text
false
```

---

### Truthy Values

```javascript
Boolean("Hello")
Boolean("0")
Boolean(100)
Boolean([])
Boolean({})
```

Output:

```text
true
```

---

## Empty String Conversion

Example:

```javascript
let value = "";

value = Boolean(value);

console.log(value);
```

Output:

```text
false
```

An empty string contains no characters, so it becomes `false`.

---

## String with Content

Example:

```javascript
let value = "JavaScript";

value = Boolean(value);

console.log(value);
```

Output:

```text
true
```

Any non-empty string becomes `true`.

---

## Understanding Common Conversion Results

| Original Value | Number() | String() | Boolean() |
|---------------|----------|----------|-----------|
| `"25"` | 25 | "25" | true |
| `"0"` | 0 | "0" | true |
| `""` | 0 | "" | false |
| `"Hello"` | NaN | "Hello" | true |
| `100` | 100 | "100" | true |
| `0` | 0 | "0" | false |

---

## Checking Data Types

The `typeof` operator helps verify the current data type.

```javascript
let value = 50;

console.log(typeof value);
```

Output:

```text
number
```

After conversion:

```javascript
value = String(value);

console.log(typeof value);
```

Output:

```text
string
```

---

## Real-World Use Cases

Type conversion is commonly used for:

- Form validation
- User age calculations
- Price calculations
- Shopping carts
- Login systems
- Data processing

---

## Best Practices

### Convert Input Before Calculations

```javascript
let quantity = Number(userInput);
```

---

### Check for Invalid Numbers

```javascript
let value = Number("Hello");

console.log(value);
```

Output:

```text
NaN
```

`NaN` means "Not a Number".

---

### Use Boolean Conversion for Validation

```javascript
let username = "";

if (Boolean(username)) {
    console.log("Valid");
} else {
    console.log("Please enter a username");
}
```

---

## Key Concepts

| Concept | Purpose |
|----------|---------|
| `Number()` | Converts values to numbers |
| `String()` | Converts values to strings |
| `Boolean()` | Converts values to true or false |
| `typeof` | Checks a value's data type |
| Truthy | Evaluates to true |
| Falsy | Evaluates to false |
| `NaN` | Represents an invalid number |

---

## Summary

Type conversion allows JavaScript developers to change values between different data types. Since user input is usually received as text, converting values is often necessary for calculations, validation, and data processing. The `Number()`, `String()`, and `Boolean()` functions provide a simple and reliable way to work with different data types in JavaScript.