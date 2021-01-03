//FirstClass Function:
function add(a, b) {
  return a + b;
}

// 1) A Function can be stored in a variable:
var sum = add;
console.log(sum(4, 5));
console.log(typeof sum);

// 2) A Function can be stored in an array:
var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](10, 5));

// 3) A Function can be stored in an object:
var obj = {
  sum: add,
};
console.log(obj);
console.log(obj.sum(20, 5));

// 4) We can create Function as we need:
setTimeout(function () {
  console.log("Hello JavaScript Programmer!");
}, 200);

// 5) We can return Function from another Function:
// 6) We can pass a Function as an arguments:
