//First Look at closure in Function:
var b = 10;

function a() {
  var x = 5;

  return function() {
    console.log(x);
  }
}
console.dir(a());