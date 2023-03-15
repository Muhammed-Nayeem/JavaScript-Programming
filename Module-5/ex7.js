//Array Methods:
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

// console.log(arr1.join(" ")); //separate the values of array by join method;

// console.log(arr1.fill(0)); //arr1 is fullfil by 0 to the help of fill method;

// var arr3 = arr1.concat(arr2); //concatenation of tow arrays;
// console.log(arr3);

//Constructor method:
// console.log(Array.isArray(arr1));

//Not do the clone like this: Not recommended
// var arr4 = arr1;
// arr4[0] = 10;
// arr4[1] = 20;
// console.log(arr1);
// console.log(arr4);

var arr4 = Array.from(arr1);
arr4[0] = 10;
arr4[1] = 20;
console.log(arr1);
console.log(arr4);
