//hoisting:
var a = 100;
// newPrint(a);

print(10);

var newPrint = print;
newPrint(45);

function print(n) {
  console.log(n);
}

print(a);

//creation phase:
//a = undefined
//newPrint = undefined
//print = print() -> ref

//execution phase:
//a = 100;
//print() = ref -> print() => 10;
//newPrint = print() -> ref;
//newPrint() = ref -> print() => 45;
//print() = ref -> print() => 100;
