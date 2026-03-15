/*
An operator allows us to transform values or combine multiple values and do all kinds of work with values. There are many categories of operators, such as mathematical, logical, comparison, assignment, and more.
*/

// Mathematical/arithmatic operators
const currentYear = 2026;
const ageAdam = currentYear - 1995;
const ageJessica = currentYear - 1996;
console.log(ageAdam);

console.log(ageAdam * 2, ageAdam / 2);

// exponents
console.log(2 ** 3);


const firstName = "Adam";
const lastName = "Chernitsky";
console.log(firstName + " " + lastName);


// assignment operators
let x = 10 + 5; // the "=" sign here is also considered an operator. In this case we actually have two operators the "=" and "+" sign. In this case x will be assigned a value of 15 because the plus operator runs before the assignment operator. This is due to some rules on operator precedence.
x += 10; // += is shorthand for value of variable = value of variable + value. In this case: x = x + 10 // returns 15
x *= 4; // *= is shorthand for value of variable = value of variable * value. In this case: x = x * 4   // returns 100 at this point
x /= 25 // /= is shorthand for value of variable = value of variable / value. In this case: x = x / 25 // returns 4 at this point
x -= 3 // -= is shorthand for value of variable = value of variable - value. In this case: x = x - 3 // returns 1 at this point
x++; // x = x + 1; // this is the increment operator
x--; // x = x - 1; // this is the decrement operator
console.log(x);

// comparison operators
// we use comparison operators to produce boolean values
console.log(ageAdam > ageJessica); // returns true
// other comparison operators: <, >, <=, >=
console.log(ageJessica >= 21);

const isFullAge = ageJessica >= 21;