// whille Loop example
// syntax:

//intialization
// while (condition) {
//     // code to be executed in each iteration
//     // increment/decrement
// }

// example of while loop
let count = 1;
while (count <= 5) {
    // console.log(count); // prints numbers from 1 to 5
    count++;
}

// example of while loop to calculate the sum of first n natural numbers
let num = 10;
let total = 0;
let i = 1;
while (i <= num) {
    total += i; // total = total + i
    i++;
}
// console.log(`Sum of first ${num} natural numbers is: ${total}`); // 55