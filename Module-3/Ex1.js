//for loop:
var num = 10;

// for (var i = 1; i <= num; i++) {
//   console.log(i);
// }

for (var i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log("Even Number: "+ i);
  }
}

for (var i = 1; i <= num; i++) {
  if (i % 2 !== 0) {
    console.log("Odd Number: "+ i);
  }
}
