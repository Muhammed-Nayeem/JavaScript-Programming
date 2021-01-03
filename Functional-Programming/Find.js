//Implementation of Find and FindIndex built in method using an array and callback function:

var arr = [1, 6, 3, 8, 5, 9, 2, 7, 4, 10];

// var num = arr.find(function(value) {
//   return value === 9;
// });
// console.log(num);


// var index = arr.findIndex(function(value) {
//   return value === 9;
// });
// console.log(index);


//Implementation:
function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      // return arr[i];
      return i;
    }
  }
}

// var num = myFind(arr, function(value) {
//   return value === 9;
// });

var index = myFind(arr, function(value) {
  return value === 9;
});

// console.log(num)
console.log(index);