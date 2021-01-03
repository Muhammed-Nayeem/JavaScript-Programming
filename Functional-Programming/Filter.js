//Implementation of built in Filter method using callback function:

var arr = [2, 1, 8, 4, 7, 5, 3, 6, 10, 9];

// var filteredArr = arr.filter(function(value, index, number) {
//   return value > 4;
// });
// console.log(filteredArr);

//Implementation:
function myFilter(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  myFilter(arr, function (value) {
    return value % 2 === 0;
  })
);

console.log(
  myFilter(arr, function (value) {
    return value % 2 === 1;
  })
);

console.log(
  myFilter(arr, function (value) {
    return value > 4;
  })
);