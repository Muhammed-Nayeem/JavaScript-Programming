//Runtime-Error Handling with try-catch block:

function sentence(text) {
  try {
    let str = text.trim();
    let words = str.split(' ');
    return words;
  } catch(error) {
    // console.log(error.message);
    console.log("Please provide a valid text");
  }
}
let word = sentence(34534);
// let word = sentence("I am a student");
console.log(word);