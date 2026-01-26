// function is reusuable piece of code that can be called multiple times
// function can take inputs (parameters) and can return output (return value)
// in a function, parameters act as placeholders for the values (arguments) that will be passed to the function when it is called
// in a function after the return statement no code will be executed it will exit the function
// syntax of function
// function functionName(parameter1, parameter2){
//     // function body
//     // return statement
// }

// function declaration
function add(a, b) {
    return a + b;
}
// console.log(add(2, 3)); // 5

//****** Default Parameters ******
// when a function is called without an argument for a parameter, the default value is used
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
// console.log(greet()); // Hello, Guest!
// console.log(greet("Alice")); // Hello, Alice!




//****** Rest Parameters ******
// ... is used as spread operator in array and rest operator in function/array
// allows a function to accept an indefinite number of arguments as an array
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(4, 5, 6, 7, 8)); // 30




// ++++++++++ function expression ++++++++++
// function can be stored in a variable
const subtract = function (a, b) {
    return a - b;
};
// console.log(subtract(5, 2)); // 3


// ++++++++++Object in fuction ++++++++++

const user = {
    name: "John",
    age: 30,
}

function handleUser(anyObject) {
    return `Name: ${anyObject.name}, Age: ${anyObject.age}`;
}
// console.log(handleUser(user)); // Name: John, Age: 30

// we can declare object directly in function call
// console.log(handleUser({name: "Alice", age: 25})); // Name: Alice, Age: 25


// ++++++++++ Array in function ++++++++++
const numbersArray = [1, 2, 3, 4, 5];

function returnsecondElement(getArray) {
    return getArray[1];
}

// console.log(returnsecondElement(numbersArray)); // 2

// we can declare array directly in function call
// console.log(returnsecondElement([10, 20, 30])); // 20