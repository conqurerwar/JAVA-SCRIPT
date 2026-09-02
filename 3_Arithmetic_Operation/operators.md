# JavaScript Operators

> Operators are symbols and keywords that allow us to perform operations
> on values and variables.

This chapter focuses on **arithmetic operators**, **compound assignment
operators**, **increment/decrement operators**, and **operator
precedence**.

------------------------------------------------------------------------

## Table of Contents

-   [1. Arithmetic Operators](#1-arithmetic-operators)
    -   [Addition](#addition)
    -   [Subtraction](#subtraction)
    -   [Multiplication](#multiplication)
    -   [Division](#division)
    -   [Exponentiation](#exponentiation)
    -   [Modulus](#modulus)
-   [2. Compound Assignment Operators](#2-compound-assignment-operators)
-   [3. Increment and Decrement](#3-increment-and-decrement)
-   [4. Operator Precedence](#4-operator-precedence)
-   [5. Practical Examples](#5-practical-examples)
-   [6. Common Mistakes](#6-common-mistakes)
-   [7. Quick Reference](#7-quick-reference)
-   [8. Practice](#8-practice)
-   [9. Summary](#9-summary)

------------------------------------------------------------------------

# 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

JavaScript provides several arithmetic operators:

  Operator   Name             Example
  ---------- ---------------- -----------
  `+`        Addition         `10 + 5`
  `-`        Subtraction      `10 - 5`
  `*`        Multiplication   `10 * 5`
  `/`        Division         `10 / 5`
  `**`       Exponentiation   `10 ** 2`
  `%`        Modulus          `10 % 3`

Let's use a variable to understand these operators.

``` javascript
let student = 30;
```

------------------------------------------------------------------------

## Addition

The `+` operator adds two values together.

``` javascript
let student = 30;

student = student + 1;

console.log(student);
```

Output:

``` text
31
```

The expression `student + 1` takes the current value and adds `1`.

------------------------------------------------------------------------

## Subtraction

The `-` operator subtracts one value from another.

``` javascript
let student = 30;

student = student - 1;

console.log(student);
```

Output:

``` text
29
```

------------------------------------------------------------------------

## Multiplication

The `*` operator multiplies values.

``` javascript
let student = 30;

student = student * 2;

console.log(student);
```

Output:

``` text
60
```

------------------------------------------------------------------------

## Division

The `/` operator divides one value by another.

``` javascript
let student = 30;

student = student / 2;

console.log(student);
```

Output:

``` text
15
```

------------------------------------------------------------------------

## Exponentiation

The `**` operator raises a number to a power.

``` javascript
let student = 30;

student = student ** 2;

console.log(student);
```

Output:

``` text
900
```

This means:

``` text
30² = 900
```

Another example:

``` javascript
let result = 2 ** 3;

console.log(result);
```

Output:

``` text
8
```

------------------------------------------------------------------------

## Modulus

The `%` operator returns the **remainder** after division.

``` javascript
let student = 30;

student = student % 2;

console.log(student);
```

Output:

``` text
0
```

Because `30` divides evenly by `2`, the remainder is `0`.

Another example:

``` javascript
let result = 17 % 5;

console.log(result);
```

Output:

``` text
2
```

Because:

``` text
17 ÷ 5 = 3 remainder 2
```

### Common Use: Checking Even and Odd Numbers

The modulus operator is commonly used to determine whether a number is
even or odd.

``` javascript
let number = 7;

console.log(number % 2);
```

Output:

``` text
1
```

A remainder of `0` means the number is even. A remainder of `1` (for
positive integers) means the number is odd.

------------------------------------------------------------------------

# 2. Compound Assignment Operators

Compound assignment operators provide a shorter way to update an
existing variable.

Instead of:

``` javascript
let student = 30;

student = student + 1;
```

You can write:

``` javascript
let student = 30;

student += 1;

console.log(student);
```

Output:

``` text
31
```

The following compound assignment operators are commonly used:

  Operator   Equivalent To
  ---------- ------------------
  `+=`       `x = x + value`
  `-=`       `x = x - value`
  `*=`       `x = x * value`
  `/=`       `x = x / value`
  `**=`      `x = x ** value`
  `%=`       `x = x % value`

------------------------------------------------------------------------

## Addition Assignment `+=`

``` javascript
let score = 30;

score += 5;

console.log(score);
```

Output:

``` text
35
```

This is equivalent to:

``` javascript
score = score + 5;
```

------------------------------------------------------------------------

## Subtraction Assignment `-=`

``` javascript
let score = 30;

score -= 5;

console.log(score);
```

Output:

``` text
25
```

Equivalent to:

``` javascript
score = score - 5;
```

------------------------------------------------------------------------

## Multiplication Assignment `*=`

``` javascript
let score = 30;

score *= 2;

console.log(score);
```

Output:

``` text
60
```

Equivalent to:

``` javascript
score = score * 2;
```

------------------------------------------------------------------------

## Division Assignment `/=`

``` javascript
let score = 30;

score /= 2;

console.log(score);
```

Output:

``` text
15
```

Equivalent to:

``` javascript
score = score / 2;
```

------------------------------------------------------------------------

## Exponentiation Assignment `**=`

``` javascript
let number = 3;

number **= 2;

console.log(number);
```

Output:

``` text
9
```

Equivalent to:

``` javascript
number = number ** 2;
```

------------------------------------------------------------------------

## Modulus Assignment `%=`

``` javascript
let number = 17;

number %= 5;

console.log(number);
```

Output:

``` text
2
```

Equivalent to:

``` javascript
number = number % 5;
```

------------------------------------------------------------------------

# 3. Increment and Decrement

JavaScript provides special operators for increasing or decreasing a
numeric value by `1`.

-   `++` → increment by `1`
-   `--` → decrement by `1`

------------------------------------------------------------------------

## Increment `++`

The increment operator increases a value by `1`.

``` javascript
let student = 30;

student++;

console.log(student);
```

Output:

``` text
31
```

This is equivalent to:

``` javascript
student = student + 1;
```

or:

``` javascript
student += 1;
```

------------------------------------------------------------------------

## Decrement `--`

The decrement operator decreases a value by `1`.

``` javascript
let student = 30;

student--;

console.log(student);
```

Output:

``` text
29
```

This is equivalent to:

``` javascript
student = student - 1;
```

or:

``` javascript
student -= 1;
```

------------------------------------------------------------------------

## Prefix vs Postfix

Increment and decrement operators can appear **before** or **after** a
variable.

### Postfix

``` javascript
let count = 5;

console.log(count++);
console.log(count);
```

Output:

``` text
5
6
```

With postfix `count++`, the current value is used first, then the
variable is increased.

### Prefix

``` javascript
let count = 5;

console.log(++count);
```

Output:

``` text
6
```

With prefix `++count`, the variable is increased first, and then the new
value is used.

The same idea applies to `--`.

------------------------------------------------------------------------

# 4. Operator Precedence

When an expression contains multiple operators, JavaScript follows a
specific order to determine which operation happens first.

A simplified order for common arithmetic operators is:

1.  **Parentheses** `()`
2.  **Exponentiation** `**`
3.  **Multiplication, Division, Modulus** `*`, `/`, `%`
4.  **Addition, Subtraction** `+`, `-`

A useful way to remember this is:

``` text
Parentheses
    ↓
Exponents
    ↓
Multiplication / Division / Modulus
    ↓
Addition / Subtraction
```

------------------------------------------------------------------------

## Parentheses

Parentheses have the highest priority among the operators covered here.

``` javascript
let result = (2 + 3) * 4;

console.log(result);
```

Output:

``` text
20
```

Without parentheses:

``` javascript
let result = 2 + 3 * 4;

console.log(result);
```

Output:

``` text
14
```

The multiplication happens first.

------------------------------------------------------------------------

## Exponentiation

Exponentiation has higher precedence than multiplication and division.

``` javascript
let result = 2 * 3 ** 2;

console.log(result);
```

Output:

``` text
18
```

JavaScript evaluates:

``` text
3² = 9
2 × 9 = 18
```

------------------------------------------------------------------------

## Multiplication, Division, and Modulus

Multiplication, division, and modulus have the same precedence level.

When operators have the same precedence, they are generally evaluated
from **left to right**.

``` javascript
let result = 20 / 5 * 2;

console.log(result);
```

Output:

``` text
8
```

The expression is evaluated as:

``` text
20 / 5 = 4
4 * 2 = 8
```

------------------------------------------------------------------------

## Addition and Subtraction

Addition and subtraction have lower precedence than multiplication,
division, and exponentiation.

``` javascript
let result = 10 + 5 * 2;

console.log(result);
```

Output:

``` text
20
```

JavaScript performs:

``` text
5 × 2 = 10
10 + 10 = 20
```

------------------------------------------------------------------------

# 5. Practical Examples

## Example 1: Student Count

Suppose a class has `30` students and one student joins.

``` javascript
let studentCount = 30;

studentCount += 1;

console.log(studentCount);
```

Output:

``` text
31
```

If two students leave:

``` javascript
let studentCount = 30;

studentCount -= 2;

console.log(studentCount);
```

Output:

``` text
28
```

------------------------------------------------------------------------

## Example 2: Calculating a Square

The exponentiation operator can be used to calculate the square of a
number.

``` javascript
let number = 6;

let square = number ** 2;

console.log(square);
```

Output:

``` text
36
```

------------------------------------------------------------------------

## Example 3: Calculating a Remainder

``` javascript
let totalItems = 23;
let itemsPerBox = 5;

let remainingItems = totalItems % itemsPerBox;

console.log(remainingItems);
```

Output:

``` text
3
```

Three items remain after filling four complete boxes.

------------------------------------------------------------------------

## Example 4: Combining Operators

Consider:

``` javascript
let result = 6 / 2 ** (2 + 5);

console.log(result);
```

First, JavaScript evaluates the parentheses:

``` text
2 + 5 = 7
```

Then exponentiation:

``` text
2⁷ = 128
```

Then division:

``` text
6 / 128 = 0.046875
```

Output:

``` text
0.046875
```

This example demonstrates why understanding operator precedence is
important when working with complex expressions.

------------------------------------------------------------------------

# 6. Common Mistakes

## Mistake 1: Confusing `/` and `%`

Division:

``` javascript
let result = 10 / 3;

console.log(result);
```

Output:

``` text
3.3333333333333335
```

Modulus:

``` javascript
let result = 10 % 3;

console.log(result);
```

Output:

``` text
1
```

`/` gives the division result, while `%` gives the remainder.

------------------------------------------------------------------------

## Mistake 2: Forgetting Operator Precedence

This:

``` javascript
let result = 2 + 3 * 4;

console.log(result);
```

does **not** calculate `(2 + 3) * 4`.

The result is:

``` text
14
```

If you want addition first, use parentheses:

``` javascript
let result = (2 + 3) * 4;

console.log(result);
```

Output:

``` text
20
```

------------------------------------------------------------------------

## Mistake 3: Reassigning a `const`

Arithmetic assignment operators modify a variable, so they cannot be
used to reassign a `const`.

``` javascript
const score = 10;

// Error:
// score += 5;
```

Use `let` when the value needs to change:

``` javascript
let score = 10;

score += 5;

console.log(score);
```

Output:

``` text
15
```

------------------------------------------------------------------------

# 7. Quick Reference

  Operator   Name                        Example                    Result
  ---------- --------------------------- ----------- ---------------------
  `+`        Addition                    `10 + 5`                     `15`
  `-`        Subtraction                 `10 - 5`                      `5`
  `*`        Multiplication              `10 * 5`                     `50`
  `/`        Division                    `10 / 5`                      `2`
  `**`       Exponentiation              `10 ** 2`                   `100`
  `%`        Modulus                     `10 % 3`                      `1`
  `+=`       Addition assignment         `x += 5`                 Adds `5`
  `-=`       Subtraction assignment      `x -= 5`            Subtracts `5`
  `*=`       Multiplication assignment   `x *= 5`        Multiplies by `5`
  `/=`       Division assignment         `x /= 5`           Divides by `5`
  `**=`      Exponentiation assignment   `x **= 2`     Raises to power `2`
  `%=`       Modulus assignment          `x %= 3`         Stores remainder
  `++`       Increment                   `x++`                    Adds `1`
  `--`       Decrement                   `x--`               Subtracts `1`

------------------------------------------------------------------------

# 8. Practice

Try solving these expressions before running the code.

### Exercise 1

``` javascript
let number = 20;

number += 10;

console.log(number);
```

What is the output?

### Exercise 2

``` javascript
let number = 50;

number /= 5;

console.log(number);
```

What is the output?

### Exercise 3

``` javascript
let number = 17;

console.log(number % 4);
```

What is the output?

### Exercise 4

``` javascript
let result = 2 + 3 * 4;

console.log(result);
```

What is the output?

### Exercise 5

``` javascript
let result = (2 + 3) * 4;

console.log(result);
```

What is the output?

### Exercise 6

``` javascript
let result = 5 + 2 ** 3;

console.log(result);
```

What is the output?

------------------------------------------------------------------------

# 9. Summary

-   Arithmetic operators perform mathematical calculations.
-   `+` adds values.
-   `-` subtracts values.
-   `*` multiplies values.
-   `/` divides values.
-   `**` performs exponentiation.
-   `%` returns the remainder.
-   Compound assignment operators provide shorter ways to update
    variables.
-   `++` increases a value by `1`.
-   `--` decreases a value by `1`.
-   Prefix and postfix increment/decrement behave differently when the
    value is used inside an expression.
-   Parentheses can be used to explicitly control the order of
    evaluation.
-   Operator precedence determines which operations JavaScript performs
    first.
-   Use parentheses when they make a complex expression clearer.

------------------------------------------------------------------------

## Next Topic

Continue to the next JavaScript topic and learn how to work with
**comparison and logical operators**.
