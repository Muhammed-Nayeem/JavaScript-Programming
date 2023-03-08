//closure at a first glance:
var n = 10;

function a() {
  var x = 5;
  console.log(n);

  return function () {
    console.log(x);
  };
}

var abc = a();
abc();
