// filter method
// it also takes a callback function as an argument
// it creates a new array with all elements that pass the test implemented by the provided function
// the provided function should return true or false
// if true, the element is included in the new array
// if false, the element is excluded from the new array

// it return something while forEach does not return anything

// syntax:

// 1. using function expression
// let newArray = array.filter(function(currentValue, index, array) {
//     // code to test each element
//     // return true or false
// });

// 2. using arrow function
// let newArray = array.filter((currentValue, index, array) => {  })
// let newArray = array.filter((currentValue, index, array) => condition ); // implicit return


//3. If you have already defined a function, you can pass its name as a callback
// function callback(currentValue, index, array) {  }
// let newArray = array.filter(callback);   // here only reference not callback()


// parameters:
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array that filter() is being applied to.
// return value: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

//************************************************ */

// example of filter method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using function expression
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0; // returns true for even numbers
});
// console.log(evenNumbers); // prints [2, 4, 6, 8, 10]

// using arrow function
let oddNumbers = numbers.filter(num => num % 2 !== 0); // implicit return for odd numbers
// console.log(oddNumbers); // prints [1, 3, 5, 7, 9]

// using named function as callback
function isGreaterThanFive(num) {
    return num > 5; // returns true for numbers greater than 5
}
let greaterThanFive = numbers.filter(isGreaterThanFive); // here only reference not isGreaterThanFive()
// console.log(greaterThanFive); // prints [6, 7, 8, 9, 10]

// example of filter method with an array of strings
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let longNamedFruits = fruits.filter(fruit => fruit.length > 5); // implicit return for fruits with names longer than 5 characters
// console.log(longNamedFruits); // prints ['banana', 'cherry', 'elderberry']   


// We can use filter method to filter array of objects based on some condition
let employees = [
    { name: 'Alice', age: 25, department: 'HR' },
    { name: 'Bob', age: 30, department: 'Engineering' },
    { name: 'Charlie', age: 35, department: 'Finance' },
    { name: 'David', age: 28, department: 'Engineering' }
];

let engineeringEmployees = employees.filter(employee => employee.department === 'Engineering');
// console.log(engineeringEmployees); 
// prints
// [ 
//   { name: 'Bob', age: 30, department: 'Engineering' },
//   { name: 'David', age: 28, department: 'Engineering' } 
// ]

// summary

// filter method is used to create a new array with elements that pass a test implemented by a provided function
// forEach method is used to execute a provided function once for each array element without returning anything

