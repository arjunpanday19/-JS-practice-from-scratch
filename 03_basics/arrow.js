// this keyword 

// this refers to current context 
// this is mainly used in object not in function

// > this works differently in different scenario
// in node environment this refers to empty objects>>>> {}
//console.log(this); // in node it will log empty object {} , in browser it will log window object


//in browser this refers to window object( global object in browser)


//"this" is mainly used in object not in function 
// In arrow function "this" return empty object.

const user ={
    name : "Arjun Panday",
    age : 23,
    welcomeMessage : function(){
        console.log("Welcome " + this.name); // this refers to current object 'user'
        //console.log(this); // logs the user object
    }    
}

// console.log(user);
// user.welcomeMessage(); // Welcome Arjun Panday
// user.name = "Aman Panday"
// user.welcomeMessage(); // Welcome Aman Panday

function chai (){  // we can store it in any variable 
    let username = "Arjun";
    //console.log(this); // in node 'this' inside any function returns a large data like global object
    //console.log(this.username); // undefined as this refers to global object which does not have username property
    
}
chai(); 


// ++++++******** Arrow Function  ******** ++++++
// Arrow function does not have its own 'this', it inherits 'this' from the surrounding lexical context

// syntax
// const functionName = (parameters) => {
//     // function body
//     // return statement
// }

// example of arrow function
const addTwoNumbers = (a, b) => {
    return a + b;
}   
//console.log(addTwoNumbers(3, 4)); // 7


// if you write {} you have to use return statement to return value from function
// if you don't write {} it will return the value implicitly

// >>> implicit return >>> if the function body has only one expression, we can omit the curly braces and the return keyword
const multiplyTwoNumbers = (a, b) => a * b;
//console.log(multiplyTwoNumbers(3, 4)); // 12

// >>> single parameter >>> if there is only one parameter, we can omit the parentheses around the parameter
const square = x => x * x;
//console.log(square(5)); // 25

// >>> no parameters >>> if there are no parameters, we use empty parentheses
const greet = () => "Hello!";
//console.log(greet()); // Hello!

// Example of 'this' in arrow function
const one = ()=>{
    username = "Arjun";
    //console.log(this); // {}
    //console.log(this.username); // undefined
}
one();


// object in arrow function

const objInArrow = () => {name: "Arjun"}
console.log(objInArrow()); // undefined  >>> because {} is treated as function body not object literal

const objArrow = () => ({name: "Arjun"}) // if you want to print object then you have to put () around {}
console.log(objArrow()); // {name: "Arjun"}