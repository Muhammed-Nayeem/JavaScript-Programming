//map method:
var arr = [1, 2, 3, 4, 5];

// var newArr = arr.map(function(value) {
//   return value + 5;
// });

// var newArr = arr.map(function (value) {
//   return Math.random() * 100 + 1;
// });

var newArr = arr.map(function(value) {
  return value * 3;
});

console.log(arr);
console.log(newArr);

//Implementation:
function myMap(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = cb(arr[i], i, arr);
    newArr.push(temp);
  }
  return newArr;
}

var qbArr = myMap(arr, function (value) {
  return value * value * value;
});
console.log(qbArr);

var addFive = myMap(arr, function (value) {
  return value + 5;
});
console.log(addFive);

var mTen = myMap(arr, function (value) {
  return value * 10;
});
console.log(mTen);
