// reduce method
// it also takes a callback function as an argument
// it applies the provided function against an accumulator and each element in the array (from left to right) to reduce it to a single value
// the provided function should return the updated accumulator value after processing each element
// initialValue is optional, if provided it will be used as the initial value of the accumulator
// it perform a operation & return a single value

// syntax:

// 1. using function expression
// let result = array.reduce(function(accumulator, currentValue, index, array) {
//     // code to combine each element with the accumulator
//     // return updated accumulator
// }, initialValue); // initialValue is optional

// 2. using arrow function
// let result = array.reduce((accumulator, currentValue, index, array) => {  }, initialValue);
// let result = array.reduce((accumulator, currentValue, index, array) => updatedAccumulator , initialValue); // implicit return

//3. If you have already defined a function, you can pass its name as a callback
// function callback(accumulator, currentValue, index, array) {  }
// let result = array.reduce(callback, initialValue);   // here only reference not callback()

// parameters:
// accumulator: The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array that reduce() is being applied to.
// initialValue (optional): A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used and skipped as currentValue.
// return value: The single value that results from the reduction.

//************************************************ */

// example of reduce method
let numbers = [1, 2, 3, 4, 5];

// using function expression to calculate sum
let sum = numbers.reduce(function(accumulator, num) {
    return accumulator + num; // returns updated accumulator
}, 0); // initialValue is 0
// console.log(sum); // prints 15

// using arrow function to calculate product
let product = numbers.reduce((accumulator, num) => accumulator * num, 1); // implicit return, initialValue is 1
// console.log(product); // prints 120

// using named function as callback to find maximum value
function findMax(accumulator, num) {
    return Math.max(accumulator, num); // returns updated accumulator
}
let maxNumber = numbers.reduce(findMax); // here only reference not findMax(), no initialValue provided
// console.log(maxNumber); // prints 5

// example of reduce method to concatenate an array of strings
let words = ['Hello', ' ', 'World', '!'];
let sentence = words.reduce((accumulator, word) => accumulator + word, ''); // implicit return, initialValue is empty string
// console.log(sentence); // prints 'Hello World!'

// it used in array of object also
let items = [
    { name: 'apple', price: 1.2 },
    { name: 'banana', price: 0.8 },
    { name: 'cherry', price: 2.5 }
];

let totalPrice = items.reduce((accumulator, item) => accumulator + item.price, 0); // implicit return, initialValue is 0
// console.log(totalPrice); // prints 4.5


// summary

// reduce method is used to reduce an array to a single value by applying a function to each element and an accumulator
// map method is used to create a new array by applying a operation to each element of the original array
// filter method is used to create a new array with all elements that pass a condition
// forEach method is used to execute a provided function once for each array element without returning a new array