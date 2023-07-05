/**
 * * Promise in ES
 */

`use strict`

console.clear();

//? problem
const borrow_money = () => {
  console.log('borrow money');
  return 100;
}

const hold_birthday = (money) => {
  console.log('hold birth');
  return ('OK with ' + money);
}

const go_relax = () => console.log('Go to relax...');

let money = borrow_money(); 
let birthday = hold_birthday(money);
let result_after_birth = go_relax();

//? use promise to syn
const f_1 = new Promise((resolve, reject) => {
  resolve('Function f_1 is resolved');
})

const f_2 = new Promise((resolve, reject) => {
  reject('Fucntion f_2 is rejected');
})

f_1.then(success => {
  console.log('f_1 is success');
})

f_2.catch(err => {
  console.log(err);
})