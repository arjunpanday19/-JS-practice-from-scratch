//can be declared with single or double quotes
// let singleQuoteString = 'Hello, World!';
// let doubleQuoteString = "Hello, World!";
   
const name = "Arjun";
const repoCount = 50;
const templateLiteralString = `Hello, ${name}! You have ${repoCount} repositories.`;
// //console.log(templateLiteralString); // Output: Hello, Arjun! You have 50 repositories.

// Using template literals for string interpolation is expressed with backticks (`) and ${} syntax
// it is mordern way of creating strings
// we can use expression in ${} or disrectly use methond in it like upperCase or lowerCase

//++++ another way to create string is by using String() constructor ++++
const anotherString = String("Hello, World!");
// console.log(anotherString); // Output: Hello, World! 


//********** Common String Methods **********

// 1. length - returns the length of the string
// console.log(name.length); // Output: 5

// 2. toUpperCase() - converts the string to uppercase
// console.log(name.toUpperCase()); // Output: ARJUN

// 3. toLowerCase() - converts the string to lowercase
// console.log(name.toLowerCase()); // Output: arjun

// 4. slice() - extracts a section of the string and returns it as a new string also take negative values
// console.log(name.slice(0, 3)); // Output: Arj
// console.log(name.slice(-3,-1));   // Output: ju

// 5. replace() - replaces a specified value with another value in the string
// console.log(name.replace("Arjun", "Pandey")); // Output: Pandey

// 6. includes() - checks if a string contains a specified value and returns true or false
// console.log(name.includes("jun")); // Output: true

// 7. trim() - removes whitespace from both ends of the string
// let stringWithWhitespace = "   Hello, World!   ";
// console.log(stringWithWhitespace.trim()); // Output: "Hello, World!"

// 8. split() - splits a string into an array of substrings based on a specified separator
// let csv = "apple,banana,cherry";
// console.log(csv.split(",")); // Output: ["apple", "banana", "cherry"]     +++ here , is separator +++

// These are just a few of the many string methods available in JavaScript.
// Strings are immutable, meaning that once created, their values cannot be changed. 
// However, string methods return new strings based on the original string.