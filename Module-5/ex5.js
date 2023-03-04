//Multidimensional Array:

//Two dimensional:
var num1 = [
  [10, 20, 30, 40, 50],
  [60, 70, 80, 90, 100],
  [10, 20, 30, 40, 50],
];

// console.log(num1[0][0]);
// console.log(num1[1][1]);
// console.log(num1[2][2]);

// for (var i = 0; i < num1.length; i++) {
//   for (var j = 0; j < num1[i].length; j++) {
//     console.log("Elements of num1"+"["+ i +"]["+j+"] = "+ num1[i][j]);
//   }
// }

//Three dimensional Array:
var numbers = [
  [
    [10, 20, 30, 40, 50],
    [60, 70, 80, 90, 100],
    [10, 20, 30, 40, 50],
  ],
  [
    [10, 20, 30, 40, 50],
    [60, 70, 80, 90, 100],
    [10, 20, 30, 40, 50],
  ],
  [
    [10, 20, 30, 40, 50],
    [60, 70, 80, 90, 100],
    [10, 20, 30, 40, 50],
  ],
];

// console.log(numbers[0][0][0]);
// console.log(numbers[1][1][1]);
// console.log(numbers[2][2][2]);

for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < numbers[i].length; j++) {
    for (var k = 0; k < numbers[i][j].length; k++) {
      console.log(
        "numbers[" + i + "][" + j + "][" + k + "] = " + numbers[i][j][k]
      );
    }
  }
}
