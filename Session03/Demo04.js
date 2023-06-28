console.clear();

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < 10; i++) {
  console.log(arr[i]);
}

console.info("------------------------------");
for(let i in arr) {
  console.log(arr[i]);
}

console.info("------------------------------");
arr.forEach(function(item) {
  console.log(item);
})

console.info("------------------------------");
for(let item of arr)
  console.log(item);