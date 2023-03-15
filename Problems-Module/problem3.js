/**
 *? Write a function that will take an array of numbers and then find the average of this numbers and return the average!
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getAverage(array) {
  let sum = 0;
  let average = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  average = sum / array.length;
  return average;
}

console.log(getAverage(numbers));
