//Asynchronous Programming is in action:
console.log("I am Line number One");
setTimeout(function () {
  console.log("I am Line number Two");
}, 3000);
console.log("I am Line number Three");
setTimeout(function () {
  console.log("I am Line number Four");
}, 5000);
console.log("I am Line number Five");
