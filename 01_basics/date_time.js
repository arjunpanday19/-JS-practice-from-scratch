// +++ dates


//date is *object* typed and gives in milli seconds from 1st Jan 1970

let myDate = new Date(); // current date and time

// console.log(myDate); // Output: Current date and time   // 026-01-21T11:28:49.593Z in this pattern
// console.log(myDate.toString()); // Output: Current date and time in string format  // Wed Jan 21 2026 11:34:31 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Output: Current date in string format  // Wed Jan 21 2026
// console.log(myDate.toTimeString()); // Output: Current time in string format  // 11:34:31 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()); // Output: Current date and time in ISO format  // 2026-01-21T11:34:31.593Z
// console.log(myDate.toLocaleString()); // Output: Current date and time in UTC format  // 1/21/2026, 11:38:24 AM

// giving specific date

let myCreateDate = new Date(2026, 0, 21, 11, 30, 0); // 21 Jan 2026 11:30:00    months in eng start from 0 to 11
// console.log(myCreateDate.toString()); // Output: Wed Jan 21 2026 11:30:00 GMT+0000 (Coordinated Universal Time)
//console.log(myCreateDate.toDateString()); // Output: Wed Jan 21 2026
//console.log(myCreateDate.toTimeString()); // Output: 11:30:00 GMT+0000 (Coordinated Universal Time)

let myNewDate = new Date("01-21-2026 11:30:00"); // another way to create date MM/DD/YYYY HH:MM:SS
// console.log(myNewDate.toLocaleString()); // Output: 1/21/2026, 11:30:00 AM

//timestamp is used in polls and quizes to record time in milliseconds
let myTimestamp = Date.now(); // gives current time in milliseconds from 1st Jan 1970
// console.log(myTimestamp); // Output: 1611234567890 (example output)

// console.log(myNewDate.getTime()); // Output: 1611234567890 (example output)  // gives time in milliseconds from 1st Jan 1970


//comparision always do in miliseconds    to convert in second divide by 1000 use floor to remove decimal part
// console.log(Math.floor((myNewDate.getTime() - myCreateDate.getTime())/1000)); // Output: 0  // both are same date so 0 difference


//********** Common Date Methods **********

// 1. getFullYear() - returns the year of the date
// console.log(myDate.getFullYear()); // Output: 2026

// 2. getMonth() - returns the month of the date (0-11)
// console.log(myDate.getMonth()); // Output: 0 (January)

// 3. getDate() - returns the day of the month (1-31)
// console.log(myDate.getDate()); // Output: 21

// 4. getHours() - returns the hour of the date (0-23)
// console.log(myDate.getHours()); // Output: 11

// 5. getMinutes() - returns the minutes of the date (0-59)
// console.log(myDate.getMinutes()); // Output: 34

// 6. getSeconds() - returns the seconds of the date (0-59)
// console.log(myDate.getSeconds()); // Output: 31

// 7. getDay() - returns the day of the week (0-6) 0 is Sunday, 1 is Monday and so on
// console.log(myDate.getDay()); // Output: 3 (Wednesday)

// These are just a few of the many date methods available in JavaScript.
// Dates in JavaScript are based on a time value that is the number of milliseconds since January 1, 1970, 00:00:00 UTC.

let newDate = new Date();
let formattedDate = newDate.toLocaleString('en-IN',{
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
}); // Output: date and time in Indian format & we can give multiple properties in object form

console.log(formattedDate); // Output: Wednesday