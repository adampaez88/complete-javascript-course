const now = 2026;
const ageAdam = now - 1995;
const ageJessica = now - 1996;

console.log(now - 1991 > now - 2018);
/* 
why are the two subtractions in the line of code above executed before the ">" symbol?
It works this way because JavaScript has a well defined order of operator precedence.
Here is the link to the MDN page on Operator Precedence:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

Some operators execute left to right and others execute right to left
*/

// the assingment operator executes from right to left
let x, y;
x = y = 25 - 10 - 5;

console.log(x, y);
/*
When JavaScript sees the line above it will look at all of the operators present and see the minus sign, it will execute that operator first. 
After the minus operators are executed we'll be left with x = y = 10;
Now the assingment operator executes from right to left, so we'll have y = 10 and x = y, which is 10.
*/

// The () have the highest precedence similar to PEMDAS in math
let averageAge = (ageAdam + ageJessica) / 2;
console.log(averageAge);