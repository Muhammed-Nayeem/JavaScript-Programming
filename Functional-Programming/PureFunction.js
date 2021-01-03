//What is pure function:
// i) It returns the same result if given the same arguments repeatedly;
// ii) It does not cause any observable side effect;

//Ex: 01, Pure Function:
function sqr(n) {
  return n * n;
}
console.log(sqr(3));
console.log(sqr(3));
console.log(sqr(3));

//Ex: 02, Not a Pure Function:
var a = 10;

function change() {
  a = 100;
}
change();
console.log(a);

//Ex: 03, Not a Pure Function:
var obj = {
  x: 50,
  y: 35,
};

function printObject(obj) {
  obj.x = 100;
  obj.y = 200;
  console.log(obj);
}
printObject(obj);
console.log(obj);