/**
 *? problem 01;
 ** This program is written for find the solution of simple Arithmetics problem;
 */

function mindGame(number) {
  let calculatedResult;
  if (typeof number !== "number") {
    return "Provide a valid number!";
  } else {
    calculatedResult = (number * 3 + 10) / 2 - 5;
  }
  return calculatedResult;
}

console.log(mindGame(50));
