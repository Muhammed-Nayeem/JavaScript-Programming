//callback function:
function mechanism(a, b, cb) {
  let c = a + b;
  let d = a - b;
  let result = cb(c, d);
  return result;
}

function sum(c, d) {
  return c + d;
}

let addition = mechanism(3, 4, sum);
console.log(addition);

console.log(mechanism(3, 4, function(c, d) {
  return c - d;
}));

console.log(mechanism(3, 4, function(c, d) {
  return c * d;
}));

console.log(mechanism(3, 4, function(c, d) {
  return c / d;
}));
