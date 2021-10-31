# Summing Grid Assignment
## Setup

### With Create React App

If you'd like to use React, this repo is set up with `create-react-app`. To get started:

1. run `npm install` / `yarn install` to install the dependencies.
2. run `npm start` / `yarn start` to start the application.

### With a different framework

You may choose another web framework to complete this task.
The root `package.json` in this repo can be adjusted to install whatever dependencies you need. **Make sure that `start` and `test` scripts in `./package.json` still work so your reviewer can properly evaluate your work.**

## Submission

Send a **zip file** of your completed exercise to your contact at CB Insights.

----

## Your task

Your task is to create a **flexible grid with four cells**. The first 3 cells in the grid should contain input fields that accept numbers. The fourth cell in the grid should display the sum of the numbers in the first three cells.

### The grid

The grid should have one row and four columns. By default, the width of each column should be 25% of the browser window's width. The cells should also have a **1px-wide black border**.

To make the grid flexible, follow these criteria:

- If the window's size is **less than 720px**, then the grid should show as a **2x2 grid**, that is, the 3rd and 4th cells slide down onto a second row.
- If the window's size is **less than 360px**, then the flexible grid should show as a **4x1 grid**, that is, each cell shows directly under the one before it. The second cell slides under the first, the third slides under the second, and the fourth slides under the third.

### The cells

The first three cells should contain input fields which each accept a number. Then write code which sums the 3 numbers together and displays the sum in the 4th field. Then write code which **formats the sum to the nearest 3-digit number** (e.g. 1234567 as 1.23M or 123456 as 123K).

### Extra Credit

If you have extra time, consider the below additional criteria.

1) Add **validation** to the input fields to ensure that the entered values are numbers. Also ensure that entering **non-number values does not break** the other functionality or cause any errors.

2) Add some **unit tests** (you may want to install additional node modules).

**As you build this app, consider...**
- How data should flow between components
- Which components could be built to be reusable
- How to style the grid so that it's easy to add or remove input cells
- How number formatting should handle edge cases

We're excited to see what you come up with!
