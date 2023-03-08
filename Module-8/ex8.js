//filter method:
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenArr = arr.filter(function(value) {
  return value % 2 === 0;
});
console.log(evenArr);

var oddArr = arr.filter(function(value) {
  return value % 2 !== 0;
});
console.log(oddArr);

var gtFive = arr.filter(function(value) {
  return value > 5;
});
console.log(gtFive);


//Implementation:
function myFilter(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var evenNum = myFilter(arr, function(value) {
  return value % 2 === 0;
});
console.log(evenNum);

var oddNum = myFilter(arr, function(value) {
  return value % 2 !== 0;
});
console.log(oddNum);

var ltSix = myFilter(arr, function(value) {
  return value < 6;
});
console.log(ltSix);
