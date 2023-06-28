a = 1;
console.log(a);

a = "Hello world!!!";
console.log(a);

// Define constant
const MAX = 100; 
console.log(MAX);

// define Global variable
var b = 88;
console.log("Out-side function", b);

function logGlobalVariable() {
  console.log("Out-side function: ", b);
  b = 100; 
  console.log("In-side function: ", b);
}

logGlobalVariable();
console.log("Out-side function: ", b);

console.info("------------------------------");

// define local variable
let c = 50; 
console.log("Out-side function c: ", c);

function logLocalVariable() {
  let c = 888;
  console.log("In-side function c: ", c);
  let d = 777;
  console.log("In-side function d: ", d);
  var e = 999;
  console.log("In-side function e: ", e);
}

logLocalVariable();
console.log("Out-side function c: ", c);
// console.log("Out-side function d: ", d);
// console.log("Out-side function e: ", e);