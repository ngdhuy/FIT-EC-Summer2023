console.clear(); 

let a = "hello world!!!";
console.log(a);

//? convert number to string
let num = 123; 
console.log(num, typeof(num));
let b = num.toString();
console.log(b, typeof(b));

let c = "This is a \
content of main topic";

console.log(c);

//? String template
let value   = 200; 
let height  = 1.65;
let info = `I am tall ${height}, i have ${value} dollars`;
console.log(info);
console.log(info[6]);

let arr = info.split(" ");
console.log(arr);