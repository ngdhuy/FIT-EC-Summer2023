console.clear();

let a = 2;          // Integer
console.log(a, typeof(a));

let b = 2.5;        // Float
console.log(b, typeof(b));

let c = "Hello";    // String
console.log(c, typeof(c));

let d = {
  id: 1, 
  name: "Product name"
};                  // Object (JSON object)
console.log(d, typeof(d));

// check valid number

console.log(a, "is a number ", Number.isFinite(a));
console.log(b, "is a number ", Number.isFinite(b));
console.log(c, "is a number ", Number.isFinite(c));

console.log(d, "is not a number ", isNaN(d));

console.log(a, "is a Integer ", Number.isInteger(a));
console.log(b, "is a Integer ", Number.isInteger(b));

let e = "8";      // string -> integer
let f = "9.5";    // string -> float

console.log("e + f = ", e + f, typeof(e + f));
console.log("e + f = ", parseInt(e) + parseInt(f), typeof(parseInt(e) + parseInt(f)));
console.log("e + f = ", parseInt(e) + parseFloat(f), typeof(parseInt(e) + parseFloat(f)));

// ECMA Script (ES)
let h = 8;      // number
let i = "8";    // string
console.log("h == i", h == i);
console.log("h === i", h === i);