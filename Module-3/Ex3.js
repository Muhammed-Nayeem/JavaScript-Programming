var num = 10;
var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= num);

// do {
//   if (i % 2 === 0) {
//     console.log("Even Number: "+ i);
//   }
//   i++;
// } while (i <= num);

do {
  if (i % 2 !== 0) {
    console.log("Odd Number: "+ i);
  }
  i++;
} while (i <= num);
