// if, else if, else statements in JavaScript
// before control flow we have to know about some basic operator

// >>Relational Operator
// <  a<b (a is less than b)
// >  a>b (a is grater than b)
// <= a <=b (a is less than or equal to b)
// >= a >=b (a is greater than or equal to b)
// == a ==b (a is equal to b), !=(a is not equal to b) 
// === a===b (a is strictly equal to b.type of a & b is also same), !==(a is not strictly equal to b means a and b is equal but type is  different)

// Logical Operator

// && -> AND it return true if both contion is true
// || -> OR it return true if any one condition is true

// = is Assignmet operator

//+++++++++++++++++++++++++++
//syntax of if, else if , else

// if(condition1){
//     // code to be executed if condition1 is true
// } else if(condition2){
//     // code to be executed if condition2 is true
// } else {
//     // code to be executed if both condition1 and condition2 are false
// }

//+++++++++++++++++++++++++++

// Example 1: Simple if-else
let age = 18;

if (age >= 18) {
    // console.log("You are an adult.");
} else {
    // console.log("You are a minor.");
}

// Example 2: if-else if-else
let score = 85;

if (score >= 90) {
    // console.log("Grade: A");
} else if (score >= 80) {
    // console.log("Grade: B");
} else if (score >= 70) {
    // console.log("Grade: C");
} else {
    // console.log("Grade: F");
}

// Example 3: Nested if
let num = 10;

if (num > 0) {
    if (num % 2 === 0) {
        // console.log("The number is positive and even.");
    } else {
        // console.log("The number is positive and odd.");
    }
} else {
    // console.log("The number is not positive.");
}

// Note: You can have multiple else if blocks to check for various conditions. The first condition that evaluates to true will execute its corresponding block of code, and the rest will be skipped.


