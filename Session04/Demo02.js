/**
 * * Async in ES6
 */

'use strict'
console.clear();

//? callback function

let value = 1; 
const f_1 = () => {
  console.log("first time: ", value);

  setTimeout(() => {
    value++; 
    console.log("-> inside function", value);
  }, 1000);

  console.log("last time: ", value);
}

f_1();

console.log("-----------------------------------");

//? Problem of callback hell
const f_2 = () => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          console.log("Run #05");
        }, 100);
        console.log("Run #04");
      }, 200);  
      console.log("Run #03");
    }, 2000);
    console.log("Run #02");  
  }, 500);
  console.log("Run #01");
}

f_2();