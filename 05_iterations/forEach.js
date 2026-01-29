// forEach loop
// mostly used for array iteration
// for-each loop executes a provided function once for each array element
// that function can be defined using function expression, arrow function or named function called callback function
// ++++++++++++Callback function 
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// it take value of array as a parameter 

// syntax:

// 1. using function expression
// array.forEach(function(currentValue, index, array) {
//     // code to be executed for each element
// });

// 2. using arrow function
//array.forEach((currentValue, index, array) => {  })

//3. If you have already defined a function, you can pass its name as a callback
// function callback(currentValue, index, array) {  }
// array.forEach(callback);   // here only reference not callback()


// parameters:
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array that forEach() is being applied to.



//************************************************ */

// example of forEach loop
let numbers = [1, 2, 3, 4, 5];

// using function expression
numbers.forEach(function(num, index) {
    // console.log(`Index: ${index}, Value: ${num}`); // prints index and value of each element
});

// using arrow function
numbers.forEach((num, index) => {
    // console.log(`Index: ${index}, Value: ${num}`); // prints index and value of each element
});

// using named function as callback
function printElement(num, index) {
    // console.log(`Index: ${index}, Value: ${num}`); // prints index and value of each element  
}
numbers.forEach(printElement); // here only reference not printElement()

// example of forEach loop with an array of strings
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
    // console.log(`Index: ${index}, Fruit: ${fruit}`); // prints index and fruit name
});


// this is good to use of array of object [{},{},{}]
// beacause it is mainly used in database operations
let students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 23 }
];

students.forEach((student, index) => {
    // console.log(`Index: ${index}, Name: ${student.name}, Age: ${student.age}`); // prints index, name and age of each student
    // console.log(student.name);
});

let data =[1,2,3,4,5];
let values = data.forEach((value)=>{
                //   console.log(value*2); // prints double of each value
                return value*2; // forEach does not return anything****
              });
console.log(values); // undefined because forEach does not return anything   

// summary
// for-in loop is used to iterate over the enumerable properties of an object
// for-of loop is used to iterate over the values of iterable objects like arrays, strings, maps, sets, etc.
// for-each loop is used to execute a provided function once for each array element