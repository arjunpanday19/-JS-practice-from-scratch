//array 
//>> resizable list of values
//>> can hold multiple values of different data types
//>> ordered collection, accessed by index (0-based)

//js array copy operation creates reference not a new copy (shallow copy-  share same reference in memory)

// Declaring an array

const fruits = ["apple", "banana", "orange"];   //first way to declare array
const someFruit = new Array("apple", "banana", "orange");  //second way to declare array
// console.log(fruits[0]); // apple
// console.log(fruits.length); // 3

// ***** methods******

// Adding elements
fruits.push("grape"); // adds to the end
fruits.unshift("mango"); // adds to the beginning

// Removing elements
fruits.pop(); // removes from the end
fruits.shift(); // removes from the beginning

// Finding elements
const index = fruits.indexOf("banana"); // returns index of "banana"
const hasOrange = fruits.includes("orange"); // returns true if "orange" is in the array

// Slicing and Splicing

const citrus = fruits.slice(1, 3); // creates a new array with elements from index 1 to 2
//gives selected portion of array without modifying original array **last limit not included**

fruits.splice(2, 1, "kiwi"); // removes 1 element at index 2 and adds "kiwi"
//cutoff selected portion of array by modifying original array **last limit included**
//manipulate original array

const arr = [1, 2, 3, 4, 5];
const subArr = arr.slice(1, 4); // subArr is [2, 3, 4], arr remains [1, 2, 3, 4, 5]
arr.splice(1, 3, 6, 7); // arr is now [1, 6, 7, 5]    // removed elements 2, 3, 4 and added 6, 7
// spilce(starting indx, end indx, no of elements to remove, elements to add)


// Iterating over an array
fruits.forEach((fruit) => {
    // console.log(fruit);
});

// Mapping and Filtering
const upperFruits = fruits.map((fruit) => fruit.toUpperCase()); // creates a new array with uppercase fruits
const longNamedFruits = fruits.filter((fruit) => fruit.length > 5); // creates a new array with fruits having names longer than 5 characters

// push and  concat to add elements , spread operator to merge arrays, flat to flatten nested arrays

// if we push array inside another array it will add as a single element (nested array)
const veggies = ["carrot", "broccoli"];
fruits.push(veggies); // fruits is now ["mango", "apple", "kiwi", "banana", ["carrot", "broccoli"]]

// to avoid nested array we use concat
const moreFruits = fruits.concat(veggies); // moreFruits is ["mango", "apple", "kiwi", "banana", "carrot", "broccoli"]

// spread to merge arrays
const allFruits = [...fruits, ...veggies]; // allFruits is ["mango", "apple", "kiwi", "banana", "carrot", "broccoli"]

// flatten nested arrays
const nestedArray = [1, 2, [3, 4], [5, 6]];
const flatArray = nestedArray.flat(); // flatArray is [1, 2, 3, 4, 5, 6]
//flat(number of levels to flatten) default is 1 level




// sometime server gives any type of data so we need to make it array to perform methods on it
console.log(Array.isArray(fruits)); // true
console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o'] // converts string to array of characters
console.log(Array.from({name: "John", age: 30})); // [] // converts object to empty array as object is not iterable // we have to specify on which basis we want to make it aaray key or value

// from()   it convert data as array so that we can perform array methods on it
//of()     it create array from given set of values

let score1= 33;
let score2= 44;
let score3= 55; 
console.log(Array.of(score1, score2, score3)); // [33, 44, 55] // creates an array from the given values


// Note: There are many more array methods and functionalities in JavaScript. This is just a basic overview.
