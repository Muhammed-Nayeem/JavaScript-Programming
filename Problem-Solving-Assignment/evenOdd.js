/**
 *? problem 02;
 ** This program is written for finding the even or odd number from the given string value;
 */

function evenOdd(words) {
  if (typeof words !== "string") {
    return "Provide a valid string!";
  }
  let characters = parseInt(words.length);
  if (characters % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOdd("chatgpt"));
