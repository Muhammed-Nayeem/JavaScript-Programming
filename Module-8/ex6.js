//foreach method:
var arr = [1, 2, 3, 4, 5];

arr.forEach(function(value, index, arr) {
  console.log(value, index, arr);
});

arr.forEach(function(value, index, arr) {
  arr[index] = value + 2;
  console.log(value, index, arr);
});

console.log(arr);
var sum = 0;

arr.forEach(function(value) {
  sum += value;
});

console.log(sum);


//Implementation:
function myForEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

myForEach(arr, function(value, index, arr) {
  console.log(value, index, arr);
});

myForEach(arr, function(value, index, arr) {
  arr[index] = value + 2;
  console.log(value, index, arr);
});
console.log(arr);

var sum = 0;
myForEach(arr, function(value) {
  sum += value;
});
console.log(sum);
