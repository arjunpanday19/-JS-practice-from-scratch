//classification of datatype based on " How they stored in memory" as well as "How they retrieve from memory"

//******** Primitive  **********

//Number
const score = 33;
console.log(typeof score);       //number

//String
const name = "Arjun";
console.log(typeof name);        //string

//Boolean
let  isClicked = true; 
console.log(typeof isClicked);   //boolean

//null
let vote = null;
console.log(typeof vote);        //object

// undefined
let age;
console.log(typeof age);         //undefined

//BigInt
let bigNumber = 1234578912345678n;
console.log(typeof bigNumber);   // bigint

//Symbol
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(typeof anotherId);   // symbol

console.log(id == anotherId); // Symbol always gives unique value


//******* Non-Primitive *******

//Array
const hero= ["SpiderMan","IronMan","SuperMan"];
console.log(typeof hero);        //object

//object
let myObj= {
    fullName:"Arjun Panday",
    age:23,
};
console.log(typeof myObj);       //object

//function
let myFunction= function(){
    console.log("Hello World!");
}
myFunction();

console.log(typeof myFunction);  //function

//***** check type by "typeof ____"



//+++++++++type of memory

//stack (Primitive type uses it)  -> gives copy of variable

//heap (Non- primitive type uses it)  -> gives reference of variable

let myYoutubeName = "hiteshdotcom";
let anotherName = myYoutubeName;     //value in stack

anotherName ="chaiaurcode";

console.log(myYoutubeName);    //hiteshdotcom
console.log(anotherName);      //chaiaurcode

let userOne ={                     //nonpremitive
    email:"user@google.com",
    upi:"user@ybl",
}

let userTwo = userOne;        // reference in heap
userTwo.email = "hitesh@google.com"

console.log(userOne.email);  //hitesh@google.com
console.log(userTwo.email);  //hitesh@google.com
