//Implementation of ForEach built in method using an Array and Callback Function:

var arr = [1, 2, 3, 4, 5];

// var sum = 0;
// arr.forEach(function(value, index, arr) {
//   console.log(value, index, arr);
//   sum += value;
// });
// console.log(sum);

// arr.forEach(function(value, index, arr) {
//   return arr[index] = value + 5;
// });
// console.log(arr);


//Implementation:
function ForEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    cb(arr[i], i, arr);
  }
}
// ForEach(arr);

var sum = 0;
ForEach(arr, function(value, index, arr) {
  console.log(value, index, arr);
  sum += value;
});
console.log(sum);


//Increase 5 with each value appear in this array:
ForEach(arr, function(value, index, arr) {
  arr[index] = value + 5;
})
console.log(arr);