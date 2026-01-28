// for loop 
// syntax: 
// for (initialization; condition; increment/decrement) {
//     // code to be executed in each iteration
// }

// example of for loop
for (let i = 1; i <= 5; i++) {
    // console.log(i); // prints numbers from 1 to 5
}

// example of for loop to iterate through an array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]); // prints each fruit in the array
}

// example of for loop to calculate the sum of first n natural numbers
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i; // sum = sum + i
}
// console.log(`Sum of first ${n} natural numbers is: ${sum}`); // 55


// Nested for loop example
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        // console.log(`i: ${i}, j: ${j}`);
    }
}
// This will print:
// i: 1, j: 1
// i: 1, j: 2
// i: 2, j: 1
// i: 2, j: 2
// i: 3, j: 1
// i: 3, j: 2

//+++++++++++++++++++++++++++++++


// Loop Control Statements

// break statement: used to exit the loop prematurely
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // exit the loop when i is 3
    }
    // console.log(i); // prints 1, 2
}

// continue statement: used to skip the current iteration and move to the next one
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // skip the iteration when i is 3
    }
    // console.log(i); // prints 1, 2, 4, 5
}

// Note: Be cautious when using break and continue statements, as they can affect the flow of the loop and may lead to unexpected behavior if not used properly.