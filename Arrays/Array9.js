//How to use Arrays Built in methods that provide JavaScript:
var arr = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

// console.log(arr.join(' | , '));
// arr.fill(true);
// var arr3 = arr.concat(arr2);
// console.log(arr3);

// console.log(Array.isArray(arr2));

var arr4 = Array.from(arr);
arr4[0] = 8;
console.log(arr4);