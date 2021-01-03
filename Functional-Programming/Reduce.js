//Implementation of Reduce built in method using an array and callback function:

var arr = [67, 1, 3, 2, 5, 4];

// var sum = arr.reduce(function(prev, curr) {
//   return prev + curr;
// }, 100);
// console.log(sum);

// var max = arr.reduce(function(prev, curr) {
//   return Math.max(prev, curr);
// }, 0);
// console.log(max);

// var min = arr.reduce(function(prev, curr) {
//   return Math.min(prev, curr);
// }, arr[0]);
// console.log(min);


//Implementation:
function myReduce(arr, cb, acc) {
  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

var sum = myReduce(arr, function(prev, curr) {
  return prev + curr;
}, 0);

var max = myReduce(arr, function(prev, curr) {
  return Math.max(prev, curr);
}, arr[0]);

var min = myReduce(arr, function(prev, curr) {
  return Math.min(prev, curr);
}, arr[0]);

console.log(sum, max, min);
