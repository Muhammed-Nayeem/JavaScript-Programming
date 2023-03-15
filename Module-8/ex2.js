//first class function:
function sum(a, b) {
  return a + b;
}

// i) A function can be stored in a variable:
let add = sum;
// console.log(typeof add);
console.log(add(10, 20));

// ii) A function can be stored in a array:
let arr = [];
arr.push(sum);
// console.log(typeof arr[0]);
console.log(arr[0](50, 50));

// iii) A function can be stored in object:
let obj = {
  add: sum,
};
// console.log(typeof obj.add);
console.log(obj.add(50, 60));

// iv) We can create function as we need:
setTimeout(function() {
  console.log("We can create function as we need");
}, 1000);

// v) We can pass a function as a parameter:

// vi) We can return a function from another function:
