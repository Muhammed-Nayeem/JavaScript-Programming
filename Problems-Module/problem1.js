/**
 *? Write a program that is find the minimum number from an array!
 */

const numbers = [12, 35, 1, 10, -70, 34];

//Approach: 1
// let minNum;
// for (let i = 0; i < numbers.length; i++) {
//   minNum = numbers[0];
//   if (numbers[i] < minNum) {
//     minNum = numbers[i];
//     break;
//   }
// }
// console.log(`Minimum Number is : ${minNum}`);


//Approach: 2
let minNum = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (minNum > numbers[i]) {
    minNum = numbers[i];
  }
}
console.log(`Minimum Number is: ${minNum}`);
