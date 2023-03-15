var num = 50;
var i = 1;

//break statement:
// while (i <= num) {
//   console.log(i);
//   if (i >= 15) {
//     break;
//   }
//   i++;
// }

//continue statement:
for (i = 1; i <= num; i++) {
  if (i === 10 || i === 20 || i === 30 || i === 40) {
    continue;
  } else {
    console.log(i);
  }
}
