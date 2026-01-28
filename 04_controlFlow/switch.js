// switch statement : when we have multiple conditions to check, we can use switch statement instead of multiple if...else if...else statements
//syntax
// switch(expression){
//     case value1:
//         // code to be executed if expression === value1
//         break;
//     case value2:
//         // code to be executed if expression === value2
//         break;
//     ...
//     default:
//         // code to be executed if expression does not match any case
// }

// example of switch statement
let day = 3;
let dayName;

switch(day){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

// console.log(dayName); // Wednesday

// Note: The break statement is used to exit the switch block once a case is matched. If break is omitted, the code will "fall through" to the next case, executing all subsequent cases until a break is encountered or the switch block ends.

// truthy and falsy values in js

//>> truthy values : values that are considered true in a boolean context
// examples of truthy values
// - Non-zero numbers (e.g., 1, -1, 3.14)
// - Non-empty strings (e.g., "hello", "0", " ", "false")
// - Objects (e.g., {}, [])
// - true
// - function(){}

//>> falsy values : values that are considered false in a boolean context
// examples of falsy values
// - false
// - 0
// - -0
// - 0n (BigInt zero)
// - "" (empty string)
// - null
// - undefined
// - NaN (Not-a-Number)

// Example of truthy and falsy values in if statement
const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {  //Object.keys(emptyObject) returns an array of keys in the object
    // console.log("This is a truthy value.");
} else {
    // console.log("This is a falsy value.");
}