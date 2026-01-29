//for of loop
// syntax:
// for (variable of iterable) {
//     // code to be executed in each iteration
// }

// in for of loop not need to worry about initialization, condition and increment/decrement as in for loop
// for of loops is specifically designed to iterate over iterable objects like arrays, strings, maps, sets, etc.
// for of loops is not worked with objects. if you still want then you can use Object.keys(), Object.values() or Object.entries() method to convert object into iterable form.
// Object.keys() - returns an array of object's own enumerable property names
// Object.values() - returns an array of object's own enumerable property values
// Object.entries() - returns an array of object's own enumerable [key, value] pairs


// example of for-of loop
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
    // console.log(color); // prints each color in the array
}

// example of for-of loop with a string
let word = "hello";
for (let char of word) {
    // console.log(char); // prints each character in the string
}


// Map construction and initialization
// Map is a collection of key-value pairs where keys can be of any data type & should unique
let capitals = new Map();
capitals.set('USA', 'Washington, D.C.');  // set is used to add key-value pairs to the Map
capitals.set('France', 'Paris');
capitals.set('Japan', 'Tokyo');

// console.log(capitals);
// console.log(capitals.size); // 3
// console.log(capitals.get('USA')); // Washington, D.C.   //get is used to retrieve value by key from the Map


// example of for-of loop with a Map
for (let [country, capital] of capitals) {       //[] is used for array destructuring
    // console.log(`${country}: ${capital}`); // prints each country and its capital
}

const myObject = { a: 1, b: 2, c: 3 };

// Using Object.entries() to convert object into iterable form. it return an array of key- value pairs[[key: value],[key:value]]
for (let [key, value] of Object.entries(myObject)) {   //[] is used for array destructuring
    console.log(`${key}: ${value}`); // prints each key and its value
}