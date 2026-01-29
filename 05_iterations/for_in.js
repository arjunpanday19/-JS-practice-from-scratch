//for in loop
//syntax:
//for(variable in object){
    // code to be executed in each iteration
//}

// in for in loop we don't need to worry about initialization, condition and increment/decrement as in for loop
// for in loops is specifically designed to iterate over the enumerable properties of an object
// for in loops is not suitable for iterating over arrays or other iterable objects as it may lead to unexpected results
//it is good for objects

// example of for-in loop
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    // console.log(`${key}: ${person[key]}`); // prints each key and its value // person[key] is used to access the value of the property using the key by array destructuring
}

// example of for-in loop with an array (not recommended)
let fruits = ['apple', 'banana', 'cherry'];
for (let index in fruits) {
    // console.log(`${index}: ${fruits[index]}`); // prints each index and its value
    // console.log(index); // it prints index of the array
}


//map is not iterable using for in loop


//summary 

// for-in loop is used to iterate over the enumerable properties of an object
// for-of loop is used to iterate over the values of iterable objects like arrays, strings, maps, sets, etc.
// for-each loop is used to execute a provided function once for each array element