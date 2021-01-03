//Execution Context:
function a() {
  b();
  console.log('I am function a');
}

function b() {
  d();
  console.log('I am function b');
}

function c() {
  console.log('I am function c');
}

function d() {
  c();
  console.log('I am function d');
}

var x = 100;
a();
console.log('I am global');


//Execution of C function context
//Execution of D function context
//Execution of B function context
//Execution of A function context
//Execution of Global