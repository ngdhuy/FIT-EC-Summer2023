//! using strict mode of ES6

'use strict'

console.clear();

//? traditional function
function sum(a, b) {
  return a + b
}

let a = 10
let b = '20'
let c = sum(a, b)

console.log(c, typeof(c));

//? pass by value
function doubleValue(value) {
  value = value * 2
  console.log(`Inside value = ${value}`)
}

let v = 3
console.log(`Outside value = ${v}`)
doubleValue(v)
console.log(`Outside after call double function value = ${v}`);

//? pass by reference -> pass by OBJECT
const doubleValue_2 = function(obj) {
  obj.value = obj.value * 2
  console.log(`Inside function obj = ${obj.value}`)
}

let obj = { value: 2 }
console.log(`Outside function obj = ${obj.value}`)
doubleValue_2(obj)
console.log(`Outside function obj = ${obj.value}`)

//? Arrow function
let d = 10; 
let e = 20;

function sum (a, b) { return a + b }
console.log(sum(e, d))

const sum_2 = function(a, b) { return a + b }
console.log(sum_2(d, e))

const sum_3 = (a, b) => { return a + b }
console.log(sum_3(d, e))

const sum_4 = (a, b) => a + b
console.log(sum_4(d, e))

