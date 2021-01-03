//Uses of Currying:
function add(a, b, c) {
  return a + b + c;
}
// add(10, 20, 30);

function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
var result = currying(10)(5)(15);
console.log(result);
