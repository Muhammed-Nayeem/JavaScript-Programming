//Error Handling with Try and Catch:

function sentenceToWords(text) {
  try {
    let str = text.trim();
    let words = str.split(" ");
    return words;
  } catch (e) {
    console.log(e.message);
  }
}

let sToW = sentenceToWords("   Bangladesh is the greenland country  ");
// let sToW = sentenceToWords(354365476);
console.log(sToW);
