/**
 *? Write a program that will return the most smallest number from three numbers!
 */

let numOne = 65;
let numTwo = 30;
let numThree = 50;

//Approach: 1
let smallestNum = 0;
if (numOne < numTwo && numOne < numThree) {
  smallestNum = numOne;
  console.log(`Smallest Number is : ${smallestNum}`);
} else if (numTwo < numThree) {
  smallestNum = numTwo;
  console.log(`Smallest Number is : ${smallestNum}`);
} else {
  smallestNum = numThree;
  console.log(`Smallest Number is : ${smallestNum}`);
}
