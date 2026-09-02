# JavaScript Variables

> Variables are used to store data that can be accessed and used
> throughout a JavaScript program.

## Table of Contents

-   [1. What Is a Variable?](#1-what-is-a-variable)
-   [2. Declaring Variables](#2-declaring-variables)
    -   [`let`](#let)
    -   [`const`](#const)
    -   [`var`](#var)
-   [3. Variable Naming Rules](#3-variable-naming-rules)
-   [4. Naming Conventions](#4-naming-conventions)
-   [5. JavaScript Data Types](#5-javascript-data-types)
    -   [String](#string)
    -   [Number](#number)
    -   [Boolean](#boolean)
    -   [Undefined](#undefined)
    -   [Null](#null)
    -   [BigInt](#bigint)
    -   [Symbol](#symbol)
    -   [Object](#object)
    -   [Array](#array)
    -   [Function](#function)
-   [6. The `typeof` Operator](#6-the-typeof-operator)
-   [7. Reassigning Variables](#7-reassigning-variables)
-   [8. Dynamic Typing](#8-dynamic-typing)
-   [9. Declaration vs Assignment](#9-declaration-vs-assignment)
-   [10. Multiple Variables](#10-multiple-variables)
-   [11. Constants](#11-constants)
-   [12. Primitive vs Object Values](#12-primitive-vs-object-values)
-   [13. Common Mistakes](#13-common-mistakes)
-   [14. Quick Reference](#14-quick-reference)
-   [15. Practice](#15-practice)
-   [16. Summary](#16-summary)

------------------------------------------------------------------------

## 1. What Is a Variable?

A **variable** is a named container used to store a value.

That value can be:

-   Text
-   A number
-   `true` or `false`
-   An object
-   An array
-   Or another JavaScript value

### Example

``` javascript
let age = 25;

console.log(age);
```

Output:

``` text
25
```

Here:

-   `let` declares the variable.
-   `age` is the variable name.
-   `25` is the stored value.
-   `=` assigns the value to the variable.

------------------------------------------------------------------------

## 2. Declaring Variables

Modern JavaScript provides three keywords for declaring variables:

-   `let`
-   `const`
-   `var`

### `let`

Use `let` when the variable's value may need to change.

``` javascript
let age = 25;

console.log(age);
```

The value can be reassigned:

``` javascript
let age = 25;

age = 26;

console.log(age);
```

Output:

``` text
26
```

### `const`

Use `const` when a variable should not be **reassigned**.

``` javascript
const pi = 3.14159;

console.log(pi);
```

Reassigning a `const` variable causes an error:

``` javascript
const pi = 3.14159;

pi = 3.14; // TypeError
```

> **Important:** `const` prevents reassignment of the variable. It does
> not make every object or array stored in the variable immutable.

### `var`

`var` is the older variable declaration keyword.

``` javascript
var name = "John";

console.log(name);
```

Modern JavaScript generally prefers `let` and `const` because they
provide block scope and make variable behavior easier to understand.

### Which One Should You Use?

A simple rule:

``` text
Use const by default.
Use let when the value needs to change.
Avoid var in modern JavaScript unless you specifically need its behavior.
```

------------------------------------------------------------------------

## 3. Variable Naming Rules

JavaScript variable names can contain:

-   Letters (`a-z`, `A-Z`)
-   Numbers (`0-9`)
-   Underscores (`_`)
-   Dollar signs (`$`)

### Rules

1.  A variable name cannot start with a number.
2.  A variable name cannot contain spaces.
3.  JavaScript keywords cannot be used as variable names.
4.  Variable names are case-sensitive.

### Valid Variable Names

``` javascript
let age = 20;
let userName = "Alex";
let user_name = "Alex";
let $price = 100;
let item2 = "Phone";
```

### Invalid Variable Names

``` javascript
let 2item = "Phone";     // Invalid: starts with a number
let user name = "Alex";  // Invalid: contains a space
```

------------------------------------------------------------------------

## 4. Naming Conventions

JavaScript commonly uses **camelCase** for variable names.

``` javascript
let firstName = "John";
let lastName = "Doe";
let phoneNumber = "1234567890";
let accountBalance = 5000;
```

Use descriptive names whenever possible.

Good:

``` javascript
let studentAge = 20;
```

Less descriptive:

``` javascript
let x = 20;
```

Good variable names make code easier to read and maintain.

------------------------------------------------------------------------

# 5. JavaScript Data Types

A **data type** describes the kind of value stored in a variable.

JavaScript has the following primitive data types:

1.  String
2.  Number
3.  BigInt
4.  Boolean
5.  Undefined
6.  Null
7.  Symbol

JavaScript also has the **Object** type, which includes values such as
objects, arrays, and functions.

------------------------------------------------------------------------

## String

A **string** represents text.

Strings can be written using:

-   Double quotes: `"Hello"`
-   Single quotes: `'Hello'`
-   Template literals: `` `Hello` ``

### Example

``` javascript
let firstName = "John";
let message = 'Hello World';
let greeting = `Hello!`;

console.log(firstName);
console.log(message);
console.log(greeting);
```

Check the type:

``` javascript
let name = "John";

console.log(typeof name);
```

Output:

``` text
string
```

------------------------------------------------------------------------

## Number

The `number` type represents numeric values, including integers and
decimal numbers.

### Example

``` javascript
let age = 25;
let price = 19.99;
let temperature = -5;

console.log(age);
console.log(price);
console.log(temperature);
```

Check the type:

``` javascript
let age = 25;

console.log(typeof age);
```

Output:

``` text
number
```

JavaScript's `number` type also includes special values such as `NaN`
and `Infinity`.

``` javascript
console.log(typeof NaN);
console.log(typeof Infinity);
```

Output:

``` text
number
number
```

------------------------------------------------------------------------

## Boolean

A Boolean has only two possible values:

-   `true`
-   `false`

Booleans are commonly used with conditions.

### Example

``` javascript
let isStudent = true;
let isOnline = false;

console.log(isStudent);
console.log(isOnline);
```

Check the type:

``` javascript
console.log(typeof isStudent);
```

Output:

``` text
boolean
```

### Boolean with a Condition

``` javascript
let age = 20;
let isAdult = age >= 18;

console.log(isAdult);
```

Output:

``` text
true
```

------------------------------------------------------------------------

## Undefined

A variable has the value `undefined` when it has been declared but has
not been assigned a value.

### Example

``` javascript
let username;

console.log(username);
```

Output:

``` text
undefined
```

Check the type:

``` javascript
console.log(typeof username);
```

Output:

``` text
undefined
```

------------------------------------------------------------------------

## Null

`null` represents an intentional absence of a value.

### Example

``` javascript
let selectedUser = null;

console.log(selectedUser);
```

You can use `null` when you intentionally want to indicate that a value
is currently empty or unavailable.

``` javascript
let result = null;

console.log(result);
```

> **JavaScript behavior:** `typeof null` returns `"object"`. This is a
> historical behavior of JavaScript.

``` javascript
console.log(typeof null);
```

Output:

``` text
object
```

------------------------------------------------------------------------

## BigInt

`BigInt` is used for integers larger than the safe range of JavaScript's
`number` type.

Create a BigInt by adding `n` to the end of an integer.

### Example

``` javascript
let bigNumber = 9007199254740993n;

console.log(bigNumber);
console.log(typeof bigNumber);
```

Output:

``` text
9007199254740993n
bigint
```

BigInt and Number values should not be mixed directly in arithmetic
operations.

``` javascript
let number = 10;
let bigNumber = 20n;

// This causes a TypeError:
// console.log(number + bigNumber);
```

------------------------------------------------------------------------

## Symbol

A `Symbol` creates a unique primitive value.

### Example

``` javascript
let id = Symbol("id");

console.log(id);
console.log(typeof id);
```

Output:

``` text
symbol
```

Symbols are often used as unique property keys in objects.

------------------------------------------------------------------------

## Object

An **object** stores related data as key-value pairs.

### Example

``` javascript
let person = {
    name: "John",
    age: 25,
    isStudent: false
};

console.log(person);
console.log(person.name);
console.log(person.age);
```

Output:

``` text
John
25
```

An object can contain values of different data types.

------------------------------------------------------------------------

## Array

An **array** stores multiple values in a single variable.

### Example

``` javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits[0]);
```

Output:

``` text
Apple
```

Array indexes start at `0`.

``` text
Index:  0        1         2
Value:  Apple   Banana    Mango
```

You can access an item using its index:

``` javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
```

------------------------------------------------------------------------

## Function

A **function** is a reusable block of code.

### Example

``` javascript
function greet() {
    console.log("Hello!");
}

greet();
```

Functions are also values in JavaScript.

``` javascript
function greet() {
    console.log("Hello!");
}

console.log(typeof greet);
```

Output:

``` text
function
```

------------------------------------------------------------------------

# 6. The `typeof` Operator

The `typeof` operator returns a string describing the type of a value.

### Examples

``` javascript
console.log(typeof "Hello");        // string
console.log(typeof 25);             // number
console.log(typeof true);            // boolean
console.log(typeof undefined);       // undefined
console.log(typeof 100n);            // bigint
console.log(typeof Symbol("id"));    // symbol
console.log(typeof {});              // object
console.log(typeof []);              // object
console.log(typeof function() {});   // function
```

> **Important:** `typeof []` returns `"object"`, not `"array"`. Use
> `Array.isArray()` when you specifically need to check whether a value
> is an array.

``` javascript
let fruits = ["Apple", "Banana"];

console.log(Array.isArray(fruits));
```

Output:

``` text
true
```

------------------------------------------------------------------------

# 7. Reassigning Variables

A variable declared with `let` can be reassigned.

``` javascript
let score = 10;

console.log(score);

score = 20;

console.log(score);
```

Output:

``` text
10
20
```

A variable declared with `const` cannot be reassigned.

``` javascript
const country = "India";

// This causes a TypeError:
// country = "USA";
```

------------------------------------------------------------------------

# 8. Dynamic Typing

JavaScript is **dynamically typed**.

This means a variable can hold a value of one type and later be assigned
a value of another type.

### Example

``` javascript
let value = 10;

console.log(typeof value);

value = "Hello";

console.log(typeof value);
```

Output:

``` text
number
string
```

The variable `value` first contains a number and later contains a
string.

------------------------------------------------------------------------

# 9. Declaration vs Assignment

**Declaration** means creating a variable.

``` javascript
let age;
```

**Assignment** means giving a variable a value.

``` javascript
age = 25;
```

You can also declare and assign a value in one statement:

``` javascript
let age = 25;
```

------------------------------------------------------------------------

# 10. Multiple Variables

You can declare variables separately:

``` javascript
let firstName = "John";
let lastName = "Doe";
let age = 25;
```

JavaScript also allows multiple declarations in one statement:

``` javascript
let firstName = "John", lastName = "Doe", age = 25;
```

For readability, separate declarations are usually easier to maintain.

------------------------------------------------------------------------

# 11. Constants

Constants are values that should not be reassigned.

``` javascript
const DAYS_IN_WEEK = 7;
const MAX_SCORE = 100;

console.log(DAYS_IN_WEEK);
console.log(MAX_SCORE);
```

Constants representing fixed configuration values are often written
using `UPPER_SNAKE_CASE`.

------------------------------------------------------------------------

# 12. Primitive vs Object Values

JavaScript values can broadly be divided into **primitive values** and
**objects**.

## Primitive Data Types

The primitive types are:

-   String
-   Number
-   BigInt
-   Boolean
-   Undefined
-   Null
-   Symbol

### Example

``` javascript
let name = "John";
let age = 25;
let isStudent = true;
```

## Object Values

Objects can store collections of related data.

``` javascript
let person = {
    name: "John",
    age: 25
};
```

Arrays and functions are also object-related values in JavaScript's type
system.

------------------------------------------------------------------------

# 13. Common Mistakes

## Forgetting Quotes Around Strings

Incorrect:

``` javascript
let name = John;
```

Correct:

``` javascript
let name = "John";
```

------------------------------------------------------------------------

## Reassigning a `const`

Incorrect:

``` javascript
const age = 20;

age = 21;
```

Correct:

``` javascript
let age = 20;

age = 21;
```

------------------------------------------------------------------------

## Using an Invalid Variable Name

Incorrect:

``` javascript
let 123name = "John";
```

Correct:

``` javascript
let name123 = "John";
```

------------------------------------------------------------------------

## Using Spaces in Variable Names

Incorrect:

``` javascript
let first name = "John";
```

Correct:

``` javascript
let firstName = "John";
```

------------------------------------------------------------------------

# 14. Quick Reference

  Keyword / Type   Purpose                              Example
  ---------------- ------------------------------------ -----------------------
  `let`            Variable that can be reassigned      `let age = 20;`
  `const`          Variable that cannot be reassigned   `const pi = 3.14;`
  `var`            Older variable declaration           `var name = "John";`
  `string`         Text                                 `"Hello"`
  `number`         Numeric values                       `25`, `3.14`
  `boolean`        `true` or `false`                    `true`
  `undefined`      No value has been assigned           `let x;`
  `null`           Intentional absence of a value       `let x = null;`
  `bigint`         Very large integers                  `100n`
  `symbol`         Unique primitive values              `Symbol("id")`
  `object`         Collection of related data           `{ name: "John" }`
  `array`          Collection of values                 `["A", "B"]`
  `function`       Reusable block of code               `function greet() {}`
  `typeof`         Checks the type of a value           `typeof age`

------------------------------------------------------------------------

# 15. Practice

Try creating variables for the following:

1.  Your name
2.  Your age
3.  Whether you are a student
4.  Your favorite programming language
5.  A variable with no assigned value
6.  A variable containing `null`

### Example Solution

``` javascript
let name = "Alex";
let age = 20;
let isStudent = true;
let favoriteLanguage = "JavaScript";
let unknownValue;
let selectedUser = null;

console.log(name);
console.log(age);
console.log(isStudent);
console.log(favoriteLanguage);
console.log(unknownValue);
console.log(selectedUser);
```

Now check their types:

``` javascript
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof favoriteLanguage);
console.log(typeof unknownValue);
console.log(typeof selectedUser);
```

------------------------------------------------------------------------

# 16. Summary

-   A **variable** stores a value.
-   Use `let` when the value needs to change.
-   Use `const` when the variable should not be reassigned.
-   `var` is the older way to declare variables.
-   JavaScript variable names are case-sensitive.
-   JavaScript is dynamically typed.
-   Primitive data types include `string`, `number`, `bigint`,
    `boolean`, `undefined`, `null`, and `symbol`.
-   Objects store collections of related data.
-   Arrays store multiple values.
-   Functions are reusable blocks of code and are also values.
-   Use `typeof` to inspect the type of a value.
-   Use `Array.isArray()` to specifically check for an array.
-   Use meaningful variable names to make code easier to understand.

------------------------------------------------------------------------

## Next Topic

**Data Types and Type Conversion**

Continue learning by practicing each data type and understanding how
JavaScript converts values from one type to another.
