// do_ while loop example
// syntax:

// intialization
// do {
//     // code to be executed in each iteration
//     // increment/decrement
// } while (condition);

// Speciality of do-while loop is that it will execute the code block at least once even if the condition is false

// example of do-while loop
let number = 1;
do {
    // console.log(number); // prints numbers from 1 to 5
    number++;
} while (number <= 5);

// example of do-while loop where condition is false initially
let x = 10;
do {
    // console.log(x); // prints 10
    x++;
} while (x <= 5); // condition is false, but code block executed once

// example of do-while loop to calculate the sum of first n natural numbers
let n = 10;
let sum = 0;
let j = 1;
do {
    sum += j; // sum = sum + j
    j++;
} while (j <= n);
// console.log(`Sum of first ${n} natural numbers is: ${sum}`); // 55

// Nested do-while loop example
let p = 1;
do {
    let q = 1;
    do {
        // console.log(`p: ${p}, q: ${q}`);
        q++;
    } while (q <= 2);
    p++;
} while (p <= 3);
// This will print:
// p: 1, q: 1
// p: 1, q: 2
// p: 2, q: 1
// p: 2, q: 2
// p: 3, q: 1
// p: 3, q: 2

//+++++++++++++++++++++++++++++++