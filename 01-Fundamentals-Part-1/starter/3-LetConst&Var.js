// there are three different ways to declare variables in JS. let, const, and var

// let
// we use the let keyword to define variables that may change later
let age = 30;
age = 31;
// in technical terms we call this reassigning the value of a variable or mutating it

// const
// we use the const variable when we define variables that are never meant to change. const creates an immutable variable
const birthYear = 1995;
// if we try to reassign this an error will be thrown: "assignment to constant valuable"
// since variables defined with const are immutable this also means that we cannot define an empty const variable
// const age; // error: const declarations must be initialized

/*
It's typically best practice to use const when defining variables unless you're certain that at some point the variable is going to change. The reason for this is because it is good practice to have as little room for variable mutation as possible because changing variables introduces a potential to create bugs in the code
*/


// var
// in general now with let and const we should try to avoid using the var keyword
// var is the old way of defining variables prior to es6. At first sight it works pretty much the same as let
var job = "programmer";
job = "unemployed";

// below the surface var is actually pretty different from let. var is function scoped and let is block scoped.


// you actually don't have to declare variables at all: example:
lastName = "Chernitsky";
console.log(lastName);
// this is a bad idea though because this doesn't create the variable in the current scope, instead JS creates a property on the global object.