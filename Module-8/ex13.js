//recursive function:
// function print(n) {
//   if (n === 0) {
//     return 0;
//   } else {
//     console.log("Hello JavaScript");
//     print(n - 1);
//   }
// }

// print(10);

// function numberPrint(n) {
//   if (n === 0) {
//     return 0;
//   } else {
//     console.log(n);
//     numberPrint(n - 1);
//   }
// }

// numberPrint(10);

// function sum(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n + sum(n - 1);
//   }
// }

// console.log(sum(5));

// function fact(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }
// }

// console.log(fact(5));

var arr = [1, 2, 3, 4, 5];
function sumOfArray(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  } else {
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
  }
}
console.log(sumOfArray(arr, arr.length - 1));
