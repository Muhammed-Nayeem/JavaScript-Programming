//closure: closure is when a function is able to remember and access it's lexical scope and even when that function executing it's outside of lexical scope;

//i) function is able to remember and access it's lexical scope:
function sample() {
  var message = "Learning JavaScript Closure";
  function test() {
    console.log(message);
  }
  test();
}
// sample();

//ii) function executing it's outside of lexical scope:
function sample() {
  var message = "Learning JavaScript Closure";
  function test() {
    console.log(message);
  }
  return test;
}

var result = sample();
result();
