// Closure means, when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope;

// i) Able to remember and access it's lexical scope:
function closure() {
  var msg = "I am learning closure and lexical scope";
  function SayMsg() {
    console.log(msg);
  }
  SayMsg();
}
closure();

// ii) Even that Function executing outside it's lexical scope:
function test() {
  var massage = "I am learning Closure in Lexical Scope";
  return function () {
    console.log(massage);
  };
}
var ms = test();
ms();