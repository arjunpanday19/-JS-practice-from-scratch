// ternary operator : a shorthand way to write an if...else statement
// syntax: condition ? expressionIfTrue : expressionIfFalse

// example of ternary operator
let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";

// console.log(canVote); // Yes, you can vote.

// another example
let number = 7;
let type = (number % 2 === 0) ? "Even" : "Odd";



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Nullish Coalescing Operator (??) : it returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand
// syntax: operand1 ?? operand2
//it helps to handle errors when dealing with null or undefined values comes from data sources like APIs or user inputs or databases

// example of nullish coalescing operator
let userName = null;
let defaultName = "Guest";
let finalName = userName ?? defaultName;

// console.log(finalName); // Guest

// another example
let input;
let output = input ?? "Default Value";

// console.log(output); // Default Value

let val1;
// val1 = 5??10; // val1 will be 5 because it's not null or undefined
// val1 = null??10; // val1 will be 10 because left side is null
// val1 = undefined??10; // val1 will be 10 because left side is undefined

//