/**
 * * Define function in ES 7 = ECMA Script version 7.0 
 */

'use strict'

console.clear();

//? default ES function is pass by value
function doubleValue(a) {
  a = a * 2;
  console.log(`-> inside function ${a}`);
}

let a = 10; 
console.log(`a = ${a}`);
doubleValue(a);
console.log(`a = ${a}`);

console.log('----------------------------');

//? pass by reference -> use pass object
function swap(a, b) {
  console.log(`-> inside: a = ${a.value} \t b = ${b.value}`);
  let temp = { value: a.value }; 
  a.value = b.value; 
  b.value = temp.value;
  console.log(`-> inside: a = ${a.value} \t b = ${b.value}`);
}

let c = { value: 10 }; 
let d = { value: 20 }; 
console.log(`c = ${c.value} \t d = ${d.value}`);
swap(c, d);
console.log(`c = ${c.value} \t d = ${d.value}`);

//? modern function

let arr = [1, 2, 3, 4, 5];

// for(let i = 0; i < arr.length; i++)
//   console.log(arr[i]);

arr.forEach(function(item) { console.log(item); }); 

console.log('----------------------------');

function sum(a, b) {
  return a + b;
}

// anonymous function
const sum_1 = function(a, b) {
  return a + b;
}

// arrow function
const sum_2 = (a, b) => {
  return a + b;
} 

// custom arrow function -> lamda syntax
const sum_3 = (a, b) => a + b;

let e = 30; 
let f = 40; 

console.log('sum = ', sum(e, f));
console.log('sum_1 = ', sum_1(e, f));
console.log('sum_2 = ', sum_2(e, f));
console.log('sum_3 = ', sum_3(e, f));