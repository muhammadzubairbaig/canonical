# Prefix Expression Calculator

## Overview
This project implements a calculator that evaluates prefix expressions. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator uses a depth-first approach to evaluate the expressions and handles edge cases like invalid expressions and division by zero.

## Features
- Evaluate prefix expressions.
- Supports addition, subtraction, multiplication, and division.
- Handles invalid expressions and division by zero.
- Provides detailed comments for easy understanding and maintainability.

## Installation

1. **Clone the repository:**
   To clone the project to your local machine, run the following command:
   ```bash
   git clone https://github.com/muhammadzubairbaig/canonical.git

   cd canonical

   npm install
    ```


## Usage

2. **Running Tests:**

    To run the tests for the project, use the following command:

    ```bash
    npm test
    ```

## Starting the Application

3. **Running Application:**

    To start the calculator application, use the following command:

    ```bash
    npm start

    ```

## Example Usage

3. **Running Application:**
    To evaluate an expression, such as + 3 4, use the npm start command. The calculator will output the result, which in this case is:

    
    ```bash
       7
    ```
    For example:

    **Expression: + 3 4**

    **Result: 7**

    You can try different expressions like:

    ***+ 3 4 5 → Result: 35**

    **- 3 * 4 5 → Result: -17**

    **/ - 3 4 + 5 2 → Result: -0.42857142857142855**


## Author

Muhammad Zubair Baig


Portfolio: https://muhammadzubairbaig.netlify.app/

LinkedIn: https://www.linkedin.com/in/muhammadzubairbaig/

GitHub: https://github.com/muhammadzubairbaig





------------------------------------------------------------------------------------------------





# Alternative calculator assignment

An "alternative calculator" assignment to be used as a coding challende in DevSkiller.

## Description

We'd like you to write a calculator to perform basic arithmetic, but using an alternative syntax for writing the expressions.

In this alternative notation, the operators precede the operands. For example while in traditional notation we might write `3 + 4`, instead we would write `+ 3 4`.

The main advantage of this format is that it does not require parentheses for any ambiguous expression.

| Traditional notation    | Alternative notation |
| ----------------  | --------------- |
| 3 + 4             | + 3 4           |
| 3 - (4 * 5)       | - 3 * 4 5       |
| (3 + 4) * 5       | * + 3 4 5       |
| (3 - 4) / (5 + 2) | / - 3 4 + 5 2   |

In the code provided, the `app/calculator.js` file exports a `calculate` function. This function is expected to take an alternative expression as a string, and output the numerical solution.

We have included some tests to check this function works as expected.

To run the code:

```
npm install  # install dependencies
npm start    # use the calculator with an interactive prompt
npm test     # run the tests
```

Please implement the `calculate` function to solve expressions in the alternative format as expected.

"# canonical" 
"# canonical" 


