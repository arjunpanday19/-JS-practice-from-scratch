// map method
// it also takes a callback function as an argument
// it creates a new array with the result  of some operation on each element of the original array
// the provided function should return the transformed value for each element
//return value is important here as it forms the new array

// syntax:

// 1. using function expression
// let newArray = array.map(function(currentValue, index, array) {
//     // code to transform each element
//     // return transformed value
// });

// 2. using arrow function
// let newArray = array.map((currentValue, index, array) => {  })
// let newArray = array.map((currentValue, index, array) => transformedValue ); // implicit return

//3. If you have already defined a function, you can pass its name as a callback
// function callback(currentValue, index, array) {  }
// let newArray = array.map(callback);   // here only reference not callback()
// parameters:
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array that map() is being applied to.
// return value: A new array with the transformed elements.

//************************************************ */

// example of map method
let numbers = [1, 2, 3, 4, 5];

// using function expression
let squaredNumbers = numbers.map(function(num) {
    return num * num; // returns the square of each number
});
// console.log(squaredNumbers); // prints [1, 4, 9, 16, 25]

// using arrow function
let doubledNumbers = numbers.map(num => num * 2); // implicit return for doubling each number
// console.log(doubledNumbers); // prints [2, 4, 6, 8, 10]

// using named function as callback
function increment(num) {
    return num + 1; // returns the incremented value of each number
}
let incrementedNumbers = numbers.map(increment); // here only reference not increment()
// console.log(incrementedNumbers); // prints [2, 3, 4, 5, 6]

// example of map method with an array of strings
let fruits = ['apple', 'banana', 'cherry'];
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase()); // implicit return for converting each fruit name to uppercase
// console.log(uppercasedFruits); // prints ['APPLE', 'BANANA', 'CHERRY']


// summary

// map method is used to create a new array by applying a operation to each element of the original array
// forEach method is used to execute a provided function once for each array element without returning a new array
// filter method is used to create a new array with all elements that pass a condition

//********************************************************************************** */

//chain of methods

//we can chain operations like filter and map together
// map().map().filter() etc
// result of one method becomes the input for the next method
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = nums
    .filter(num => num % 2 === 0) // filter even numbers
    .map(num => num * num); // square each even number

// console.log(result); // prints [4, 16, 36, 64, 100] which are squares of even numbers