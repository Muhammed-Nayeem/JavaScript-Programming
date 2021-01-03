//Callback Function is like a General Function and it also works like a Higher Order Function:

function sample(a, b, cb) {

  var c = a + b;
  var d = a - b;

  // var res = sum(c, d);
  var res = cb(c, d);
  return res;
}

function sum(a, b) {
  return a + b;
}

var res = sample(5, 8, sum);
console.log(res);

var res2 = sample(5, 8, function(c, d) {
  return c - d;
});
console.log(res2);

var res3 = sample(5, 8, function(c, d) {
  return c * d;
});
console.log(res3);