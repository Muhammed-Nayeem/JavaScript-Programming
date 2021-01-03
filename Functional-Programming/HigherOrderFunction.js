//Higher Order Function:
// 1) We can pass a Function as an arguments;
// 2) We can return a Function from an another Function;

function add(a, b) {
  return a + b;
}

function manipulate(m, n, func) {
  var c = m + n;
  var d = m - n;

  // function multiply() {
  //   var p = func(m, n);
  //   return c * d * p;
  // }

  return function multiply() {
    var p = func(m, n);
    return c * d * p;
  };
}

var multiply = manipulate(3, 4, add);
console.log(multiply());
