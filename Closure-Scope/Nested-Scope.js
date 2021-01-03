//Nested Scope:
var x = 55;

function outerScope() {
  // var x = 45;
  console.log(x);
  function innerScope() {
    var y = 65;
    console.log(x);
    console.log(y);
  }
  // console.log(y);
  innerScope();
}
outerScope();
