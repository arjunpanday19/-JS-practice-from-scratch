//var  >>> global scope, redeclare & reassign allowed

//let  >>> block scope, redeclare not allowed, reassign allowed

//const  >>> block scope, redeclare not allowed, reassign not allowed

//block scope >>> defined within { } curly braces

//function scope >>> defined within function

//global scope >>> defined outside any function or block


//***********/
// closure >>> inner function has access to outer function's variables even after outer function has executed

// example of closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}
const newFunction = outerFunction('outside');
newFunction('inside'); // Outer Variable: outside \n Inner Variable: inside
//***********



// Example of block scope with let and const
{
    let blockVar = "I am block scoped";
    const blockConst = "I am also block scoped";
    // console.log(blockVar); // accessible here
    // console.log(blockConst); // accessible here
}
// console.log(blockVar); // Error: blockVar is not defined
// console.log(blockConst); // Error: blockConst is not defined

//hoisting 
// >>> var declarations are hoisted to the top of their scope and initialized with undefined
//acciessing var before declaration gives undefined
// var declarations are function-scoped or globally-scoped

// >>> let and const declarations are hoisted to the top of their block scope but are not initialized
//accessing let and const before declaration gives ReferenceError
//scope of let and const is block-scoped


//Hoisting >> core js behavior where variable and function declarations are moved to the top of their containing scope during the compile phase before code execution
//hoisting of functions
// function declarations are hoisted completely, so they can be called before they are defined
// function expressions (when a function is assigned to a variable) are not hoisted in the same way as function declarations. gives type error if accessed before declaration



// Example of hoisting
// console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

// console.log(notHoistedLet); // ReferenceError: Cannot access 'notHoistedLet' before initialization
let notHoistedLet = "I am not hoisted";

// console.log(notHoistedConst); // ReferenceError: Cannot access 'notHoistedConst' before initialization
const notHoistedConst = "I am also not hoisted";
