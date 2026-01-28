// this file demonstrates the execution context in JavaScript. How code is executed and how the context changes with function calls.

// In JavaScript, the execution context is the environment in which the code is executed. There are two main types of execution contexts: Global Execution Context and Function Execution Context.

// 1. Global Execution Context
// This is the default or base context where your code runs when it is not inside any function. It creates a global object (window in browsers, global in Node.js) and a special object called 'this'.
// First & basic step when JS code is run is the creation of Global Execution Context

// Example of Global Execution Context
// console.log(this); // In browser, it logs the Window object

// 2. Function Execution Context
// Every time a function is invoked, a new execution context is created for that function. Each function has its own execution context, which includes its own scope chain, variable object, and 'this' value.

function exampleFunction() {
    // console.log(this); // In non-strict mode, it logs the global object; in strict mode, it logs undefined
    const localVar = "I am local to exampleFunction";
    // console.log(localVar); // Accessible here
}
exampleFunction();
// console.log(localVar); // Unaccessible here, ReferenceError: localVar is not defined

// 3. Lexical Environment
// Each execution context has a lexical environment that consists of the variable environment and the scope chain. The variable environment contains all the variables and functions defined in that context.

// Example of Lexical Environment
function outerFunction() {
    const outerVar = "I am from outerFunction";

    function innerFunction() {
        const innerVar = "I am from innerFunction";
        // console.log(outerVar); // Accessible due to scope chain
        // console.log(innerVar); // Accessible here
    }
    innerFunction();
    // console.log(innerVar); // Unaccessible here, ReferenceError: innerVar is not defined
}
outerFunction();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// when any code runs , first Global Execution Context is created, then memory is allocated for variables and functions (creation phase) , then code is executed line by line (execution phase).
// eg: 
let val1 = 10;
let val2 = 20;

function addValues(a, b) {
    let sum = a + b;
    return sum;
}

let result = addValues(val1, val2);
// console.log(result); // 30

// In the above example:
// 1. Global Execution Context is created.

// 2. Memory is allocated for val1, val2, addValues function, result.
// it is first cycle of creation phase

// 3. Code is executed line by line.
// val1 <- 10 , val2 <- 20 & addValues function is stored in memory addValues <- a seprate execution context is created when function is called

// 4. When addValues is called, a new Function Execution Context is created for it.

// 5. Memory is allocated for parameters a, b and local variable sum.

// 6. Code inside addValues is executed.
//   after returning that function EC get deleted (implicitly) from the stack and control returns to global EC

// 7. After addValues completes, its execution context is popped off the stack and control returns to the global context.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 4. Call Stack
// JavaScript uses a call stack to manage execution contexts. When a function is called, its execution context is pushed onto the stack. When the function completes, its context is popped off the stack, and control returns to the previous context.

// Example of Call Stack
function firstFunction() {
    secondFunction();
    // console.log("Back to firstFunction");
}

function secondFunction() {
    thirdFunction();
    // console.log("Back to secondFunction");
}

function thirdFunction() {
    // console.log("Inside thirdFunction");
}

firstFunction();

// This code demonstrates the concept of execution contexts in JavaScript, including global and function execution contexts, lexical environments, and the call stack.