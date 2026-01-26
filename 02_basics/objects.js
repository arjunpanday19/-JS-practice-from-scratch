//Object in js is a collection of key-value pairs and can store various data types
//>> unordered collection, accessed by keys (strings or symbols)
//>> keys are unique within an object
//>> values can be of any data type including other objects or functions

// delete objName.key //by this we can delete any key of object

// object created by constructor is always singleton

//    +++++++ object literal syntax   +++++++

const person = {
    name: "John",      
    age: 30,
    isEmployed: true,
    greet: function() {   //function inside object 
        console.log("Hello, my name is " + this.name);
    }
};

// // function outside object 
// person.greetTwo= function() {
//     console.log(`Hello JsUser, Welcome ${this.name}`);  // here this refers to current context like John
// }
// person.greetTwo();

//   ++++ Accessing properties ++++

// console.log(person.name); // John
// console.log(person["age"]); // 30     // it is prefferd to use if key is string typed



// keys are string typed by default
// person["name"] is same as person.name


//    ++++++ both .freeze() & .seal() applied on Object like Object.freeze(objname) or Object.seal(objName)+++++
 
//>>>>>>>>>>> .freeze() method to make object immutable <<<<<<<<<<
// person.age = 28;
// Object.freeze(person);
// person.age = 31; // This will not change the age property as the object is frozen
// console.log(person.age); // 30

//>>>>>>>>>>> .seal() method to prevent adding or removing properties but allows modifying existing properties <<<<<<<<<<
// person.city = "America";
// console.log(person.city);
// Object.seal(person);
// person.city = "New York"; // This will not add a new property as the object is sealed
// delete person.isEmployed; // This will not delete the property as the object is sealed
// person.age = 31; // This will change the age property
// console.log(person.age); // 31

// Note: Both freeze and seal are shallow, meaning they only affect the immediate properties of the object. 
// *Nested objects can still be modified.*





// Adding or updating properties
person.city = "New York"; // adds new property
person.age = 31; // updates existing property

// Deleting properties
delete person.isEmployed;

// Iterating over properties
for (let key in person) {
    // console.log(key + ": " + person[key]);
}

// Object methods
// person.greet(); // Hello, my name is John


// +++++++++++ creating object using Object constructor ++++++++++++
// it create singleton object

const JsUser = new Object()   //Object Constructor
JsUser.username = "arjunpanday19";
JsUser.email = "arjunpanday9369@gmail.com";
JsUser.age = 23;
JsUser.displayInfo = function(){
    // console.log(`Username: ${this.username}, Email: ${this.email}, Age: ${this.age}`);
}
// console.log(JsUser);
// other all functionality as same as above


//>>> Nested Object means we can create object inside Object

const regularUser = {
    email:"arjunpanday9369@gmail.com",
    fullName:{
        firstName:"Arjun",
        lastName:"Panday",
    }
}
//accessing nested object using . or []
// console.log(regularUser.fullName.firstName);  //Arjun
//accessing nested object using []
// console.log(regularUser["fullName"]["lastName"]);  //Panday   <<<<<<<


// joining two or more object 

const obj1 = {1: "one", 2: "two"};
const obj2 = {3: "three", 4: "four"};
const obj3 = {5: "five", 6: "six"};

const obj4 = Object.assign({}, obj1, obj2, obj3);// here {} is optional but neccessary because otherwise all properties will be copied to obj1 but now all properties are copied to new empty object
// console.log(obj4); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }

// we can also use spread operator to merge objects
const mergedObj = {...obj1, ...obj2, ...obj3};
// console.log(mergedObj); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }

// when values come from databases then array of objects is used to store multiple records
const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    { id: 3, name: "Charlie"}
];
// console.log(users[1].name); // Bob


//extra    all these used on Object contructor 
// console.log(Object.keys(person)); // [ 'name', 'age', 'greet', 'city' ]
//gives array of all keys we can do what we want with these keys

// console.log(Object.values(person)); // [ 'John', 31, [Function: greet], 'New York' ]
//gives array of all values we can do what we want with these values

// console.log(Object.entries(person)); // [ [ 'name', 'John' ], [ 'age', 31 ], [ 'greet', [Function: greet] ], [ 'city', 'New York' ] ]
// gives array of key value pairs as nested arrays

console.log(person.hasOwnProperty("name"));  //hasOwnProperty() checks  object contains specific key or value result can be true/false.


//+++++++ destructuring objects ++++++++

//>> old way
// const name = person.name;
// const age = person.age;

//>> new way
//this is way to represent cleaner code by extracting multiple properties from object and assigning them to variables

const {name, age} = person; // extracting name and age properties from person object
const {name: personName, age: personAge} = person; // extracting and renaming variables

// console.log(name); // John
//console.log(personName); // John
// console.log(age); // 31
//console.log(personAge); // 31




//>>>>>>>> API (Application Programming Interface) <<<<<<<<<<
// It is a set of rules that allows different software applications to communicate with each other.
// In web development, APIs are often used to fetch data from a server or send data to a server.
// Example: RESTful APIs, GraphQL APIs, etc.

// API is in JSON format mostly because JSON is lightweight and easy to parse compared to XML.
// {"key" : ""value" , "key2" : "value2"}  json format
// sometime API give data in array of objects format
// [
//     {"id": 1, "name": "Alice"},
//     {"id": 2, "name": "Bob"}
// ]