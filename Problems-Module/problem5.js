/**
 *? Write a function that will take an array and return the second largest number from an array!
 */

const numbers = [12, 35, 1, 34, 10];

function secondLargestNumber(array) {
  let firstLargest = 0;
  let secondLargest = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[firstLargest]) {
      secondLargest = firstLargest;
      firstLargest = i;
    } else if (array[i] < array[firstLargest]) {
      if (secondLargest == -1 || array[secondLargest] < array[i]) {
        secondLargest = i;
      }
    }
  }
  return array[secondLargest];
}

console.log(`Second Largest Number: ${secondLargestNumber(numbers)}`);
