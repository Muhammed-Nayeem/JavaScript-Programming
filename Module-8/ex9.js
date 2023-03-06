//reduce method:
var arr = [1, 2, -8, 3, 4, 5];

var sum = arr.reduce(function(prev, curr) {
  return (prev + curr);
});
console.log(sum);

var max = arr.reduce(function(prev, curr) {
  return Math.max(prev, curr);
});
console.log(max);

var min = arr.reduce(function(prev, curr) {
  return Math.min(prev, curr);
}, arr[0]);
console.log(min);


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
console.log(sum);

var maxNum = myReduce(arr, function(prev, curr) {
  return Math.max(prev, curr);
}, arr[0]);
console.log(maxNum);

var minNum = myReduce(arr, function(prev, curr) {
  return Math.min(prev, curr);
}, arr[0]);
console.log(minNum);
