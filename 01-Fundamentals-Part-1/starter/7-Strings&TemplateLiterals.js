const firstName = "Adam";
const job = "Software Engineer";
const birthYear = 1995;
const year = 2026;

const adam = "I'm " + firstName + ", a " +  (year - birthYear) + " year old " + job;
console.log(adam);

// in ES6 template literals were introduced.
const adamNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(adamNew);


// another good use for template literals is multiline strings:
console.log("this is a \n\
multiline\n\
string");

console.log(`This is 
a multiline
string`);