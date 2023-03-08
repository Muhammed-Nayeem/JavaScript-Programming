/**
 *? problem 04;
 ** Solution for finding the negative values and count them and return it;
 */

function findingBadData(numbersArray) {
  let count = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] < 0) {
      count++;
    } else {
      count = 0;
    }
  }
  return count;
}

console.log(findingBadData([4, 0, 9, 5, 33, 55]));
