// swapping no in a singleline using destructuring assignment
let a = 5;
let b = 10;
// console.log("Before swapping: ", "a =", a, "b =", b);
[a, b] = [b, a];
// console.log("After swapping: ", "a =", a, "b =", b);

// swapping no in single line
let x = 15;
let y = 25;
x = (x+y)-(y=x); // swapping without temp variable
// console.log("After swapping: ", "x =", x, "y =", y);

// swapping using temp variable
let p = 30;
let q = 40;
let temp = p;
p = q;
q = temp;
// console.log("After swapping: ", "p =", p, "q =", q);     

// swapping using arithmetic operators
let m = 50;
let n = 60;
m = m + n; // m now becomes 110
n = m - n; // n becomes 50
m = m - n; // m becomes 60
// console.log("After swapping: ", "m =", m, "n =", n);     

// swapping using bitwise XOR operator
let u = 70;
let v = 80;
u = u ^ v; // u now becomes 26 (binary 01000110)
v = u ^ v; // v becomes 70 (binary 01000110)
u = u ^ v; // u becomes 80 (binary 01010000)
// console.log("After swapping: ", "u =", u, "v =", v); 
