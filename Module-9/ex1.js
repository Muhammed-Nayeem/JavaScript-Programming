//Execution Context:
function a() {
  b();
  console.log("function a");
}

function b() {
  d();
  console.log("function b");
}

function c() {
  console.log("function c");
}

function d() {
  c();
  console.log("function d");
}

var x;
x = 100;
a();
console.log("I am global context");


//creational phase:
//a() = ref
//b() = ref
//c() = ref
//d() = ref
//x = undefined

//executional phase:
//x = 100
//a() = ref -> a()
//b() = ref -> b()
//d() = ref -> d()
//c() = ref -> c()
