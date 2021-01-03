//Function Expression:
var addition = function add(a, b) {
  return a + b;
};
var res = addition(10, 30);
console.log(res);

//Anonymous Function Expression:
var subtraction = function (a, b) {
  return a - b;
};
// var sub = subtraction(50, 30);
// console.log(sub);
subtraction(50, 30);

//Asynchronous Programming:
setTimeout(function () {
  console.log("I am calling after 5 seconds!");
}, 5000);

var another = subtraction;
console.log(another(50, 30));
