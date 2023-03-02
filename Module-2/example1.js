//Conditional Statement:
var a = 30;
var b = 50;
var c = 65;

// console.log(a === b);

// console.log(a > b);

// if (a > b) {
//   console.log("A is greater than B");
// } else {
//   console.log("B is greater than A");
// }

// if (a > b) {
//   if (a > c) {
//     console.log("A is the largest number");
//   } else {
//     console.log("C is the largest number");
//   }
// } else {
//   if (b > a) {
//     if (b > c) {
//       console.log("B is the largest number");
//     } else {
//       console.log("C is the largest number");
//     }
//   }
// }

if (a > b) {
  console.log("A is greater than B");
} else if (b > a) {
  console.log("B is greater than A");
} else {
  console.log("Both the number is equal");
}
