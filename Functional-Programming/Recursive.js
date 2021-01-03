//Using of Recursive Function:
//Ex: 01
function sayHi(n) {
  if (n === 0) {
    return 0;
  } //else {
  //   console.log("Hey! I am calling.");
  //   sayHi(n - 1);
  // }
  console.log("Hey, I am calling!");
  sayHi(n - 1);
}
sayHi(10);

//Ex: 02
function sum(n) {
  if (n === 1) {
    return 1;
  } //else {
  //     return n + sum(n - 1);
  //   }
  return n + sum(n - 1);
}
console.log(sum(5));

//Ex: 03
function fact(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
  // return n * fact(n - 1);
}
console.log(fact(5));

//Ex: 04
var arr = [1, 2, 3, 4, 5];
function sumOfArray(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  } else {
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
  }
  // return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
}
console.log(sumOfArray(arr, arr.length - 1));
