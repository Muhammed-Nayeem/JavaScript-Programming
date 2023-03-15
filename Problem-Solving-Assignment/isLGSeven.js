/**
 *? problem 03;
 ** solution for another tricky Arithmetic problem;
 */

function isLGSeven(number) {
  const numSeven = 7;
  if (typeof number !== "number") {
    return "Provide a valid number!";
  }
  let subtraction = number - numSeven;
  if (subtraction < numSeven) {
    return subtraction;
  } else {
    return number + number;
  }
}

console.log(isLGSeven(15));
