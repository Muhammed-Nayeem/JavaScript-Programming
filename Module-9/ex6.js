//Scope:
var x = 10;

function test() {
  var x = 20;
  function innerTest() {
    var y = 30;
    console.log(y);
  }
  console.log(x);
  innerTest();
}
console.log(x);
test();

//scope-chain:
//test() = global x, self x, innerTest();
//innerTest() = global x, parent x, self y