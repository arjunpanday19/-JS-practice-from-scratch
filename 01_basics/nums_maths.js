//++++    num   +++++

const score = 200; //200 is a number data type
console.log(typeof score); // "number"

const balance = new Number(400); //using Number() constructor
console.log(typeof balance); // "object"

//********** Common Number Methods **********

// 1. toFixed() - formats a number using fixed-point notation
const num = 123.456789;
console.log(num.toFixed(2)); // Output: "123.46"

// 2. toString() - converts a number to a string
const age = 30;
console.log(age.toString()); // Output: "30"

// 3. parseInt() - parses a string and returns an integer
const intString = "100px";
console.log(parseInt(intString)); // Output: 100

// 4. parseFloat() - parses a string and returns a floating point number
const floatString = "12.34a5bc";
console.log(parseFloat(floatString)); // Output: 12.34

// 5. isNaN() - checks if a value is NaN (Not-a-Number)
const notANumber = "hello";
console.log(isNaN(notANumber)); // Output: true

// 6. toPrecision() - formats a number to a specified length
const preciseNum = 3.14159265359;
console.log(preciseNum.toPrecision(4)); // Output: "3.142"  // it gives string typed output

//7. toLocalString() - converts a number to a string, using local language format
const localNum = 1234567.89;
console.log(localNum.toLocaleString('en-IN')); // Output: 12,34,567.89 (Indian format)
//bydefault it uses US standard if we dont provide any locale

// These are just a few of the many number methods available in JavaScript.
// Numbers in JavaScript are always stored as floating point values, even if they are whole numbers.


//++++    maths   +++++

// Math is a built-in object that has properties and methods for mathematical constants and functions.
// It is not a function object.

//********** Common Math Methods **********

// 1. Math.round() - rounds a number to the nearest integer
console.log(Math.round(4.6)); // Output: 5
console.log(Math.round(4.4)); // Output: 4

// 2. Math.ceil() - rounds a number up to the next largest integer
console.log(Math.ceil(4.1)); // Output: 5

// 3. Math.floor() - rounds a number down to the next smallest integer
console.log(Math.floor(4.9)); // Output: 4

// 4. Math.random() - returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: A random number between 0 and 1

// 5. Math.max() - returns the largest of zero or more numbers
console.log(Math.max(1, 3, 2, 5, 4)); // Output: 5

// 6. Math.min() - returns the smallest of zero or more numbers
console.log(Math.min(1, 3, 2, 5, 4)); // Output: 1

// 7. Math.sqrt() - returns the square root of a number
console.log(Math.sqrt(16)); // Output: 4

// 8. Math.pow() - returns the base to the exponent power
console.log(Math.pow(2, 3)); // Output: 8 (2 raised to the power of 3)

// 9. Math.abs() - returns the absolute value of a number
console.log(Math.abs(-10)); // Output: 10

//******* ramdom no.
// Generate a random no. between 0 & 1 
console.log(Math.random()); // Output: A random number between 0 and 1     
console.log(Math.random() + 1); // Output: A random number between 0 and 1 and minimum 1

// Generate a random no. between 0 & 10
console.log(Math.random() * 10); // Output: A random number between 0 and 10

// Generate a random no. between 1 & 10
console.log(Math.floor(Math.random() * 10) + 1); // Output: A random integer between 1 and 10 

// Generate a random no. between min & max
 const min = 10;
 const max = 20;
 console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: A random integer between 10 and 20

// These are just a few of the many Math methods available in JavaScript.
// The Math object also contains several mathematical constants like Math.PI and Math.E.