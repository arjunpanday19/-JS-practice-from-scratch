// iife>> Immediately Invoked Function Expression

// if you want to execute a function immediately after its declaration, you can use an IIFE
// it prevents polluting the global scope and creates a private scope for variables and functions defined within it

// syntax
// (function declaration)(function call)

// eg:
(function(){
    let message = "Hello, IIFE!";
    // console.log(message); // Hello, IIFE!
})(); // function is invoked immediately after its declaration

// if function is not invoked immediately it will give error if we try to access message variable outside the function
// console.log(message); // ReferenceError: message is not defined

// IIFE with parameters
(function(name){
    // console.log(`Hello, ${name}!`); // Hello, Arjun!
})("Arjun");

// IIFE with return value
const result = (function(a, b){
    return a + b;
})(5, 10);

// Named iife >> if function has a name eg : (function myIIFE(){})()  then the name can be used for recursion or in stack traces for debugging but it is not accessible outside the IIFE
// simple/ unnamed iife >> (function(){})()  has no name and cannot be referenced within itself


// if you write concutive iife then if will consider second iife as function call of first iife and will give error
// to avoid this we can add semicolon at the end of first iife

(function(){
    // console.log("First IIFE");
})(); // semicolon added here tells iife is ended

(function(){
    // console.log("Second IIFE");
})();
