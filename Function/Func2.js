//Function parameters or arguments:
var arr1 = [1, 2, 3];
var arr2 = [6, 7, 8, 10];
var arr3 = [9, 6, 4, 10, 5];

// var i;
// var sum1 = 0;
// for (i = 0; i < arr1.length; i++)
// {
//   sum1 += arr1[i];
// }
// console.log(sum1);

// var sum2 = 0;
// for (i = 0; i < arr2.length; i++)
// {
//   sum2 += arr2[i];
// }
// console.log(sum2);

// var sum3 = 0;
// for (i = 0; i < arr3.length; i++)
// {
//   sum3 += arr3[i];
// }
// console.log(sum3);

//Create a Function to do these work efficiently:
function sumOfArray(arr) {
  var i;
  var sum = 0;
  for (i = 0; i < arr.length; i++)
  {
    sum += arr[i];
  }
  console.log(sum);
}

sumOfArray(arr1);
sumOfArray(arr2);
sumOfArray(arr3);