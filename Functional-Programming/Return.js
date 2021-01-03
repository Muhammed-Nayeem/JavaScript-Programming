//Function return from another function:

//Example: 01

function greet(msg) {
  function greetings(name) {
    return msg + ", " + name + "!";
  }
  return greetings;
}
var gm = greet('Good Morning');
var gn = greet('Good Night');
var hello = greet('JavaScript Developer');
var msg = gm('Muhammed Nayeem');
console.log(msg);
console.log(gn('Nayeem'));
console.log(hello('Nayeem'));

//Example: 02

function base(b) {
  // function power(n) {
  //   var result = 1;
  //   for (var i = 0; i < b; i++) {
  //     result *= n;
  //   }
  //   return result;
  // }
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}
var base10 = base(10);
console.log(base10(2));

var base5 = base(5);
console.log(base5(5));
console.log(base5(3));
console.log(base5(2));
console.log(base5(4));
