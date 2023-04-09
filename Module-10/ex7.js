//pass by value or pass by reference:
var n = 10;

function change(n) {
  n = n + 100;
  console.log(n);
}
change(n);
console.log(n);


var obj = {
  x: 100,
  y: 200,
};

function testChange(obj) {
  obj.x = -100;
  obj.y = -200;
  console.log(obj);
}
testChange(obj);
console.log(obj);
