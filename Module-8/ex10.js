//find & findIndex method:
var arr = [1, 2, 3, 4, 5];

var result = arr.find(function(value) {
  return value === 4;
});
console.log(result);

var res2 = arr.findIndex(function(value) {
  return value === 4;
});
console.log(res2);


//Implementation:
function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if(cb(arr[i])) {
      // return arr[i];
      return i;
    }
  }
}

var res3 = myFind(arr, function(value) {
  return value === 4;
});
console.log(res3);