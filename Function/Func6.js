//Return keyword uses in Function:
function addAll() {
  var i;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum; //return something from function;
}
var result = addAll(1, 2, 3);
console.log(result);


function person(name, email) {
  return {
    name: name,
    email: email,
  };
}
var p1 = person("Muhammed Nayeem", "mohammednayeem808@gmail.com");
var p2 = person("Shakib", "shakib90@gmail.com");
console.log(p1);
console.log(p2);


function addNum(a, b, c) {
  var sum = a + b + c;
  return sum;
}
var result = addNum(10, 20, 30);
console.log(result);


function subNum(a, b, c) {
  var sub = (a + b) - c;
  return sub;
}
var res = subNum(30, 20, 20);
console.log(res);