var num = [1, 3, 2, 6, 4, 7, 5, 8, 10, 9];

// for (var i = 0; i < num.length; i++) {
//   num[i] += 2;
//   console.log(num[i]);
// }

// console.log(num);

// var sum = 0;
// for (var i = 0; i < num.length; i++) {
//   sum += num[i];
// }
// console.log("Sum is: "+ sum);

var evenSum = 0;
for (var i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    evenSum += num[i];
  }
}
console.log("Sum is: "+ evenSum);
