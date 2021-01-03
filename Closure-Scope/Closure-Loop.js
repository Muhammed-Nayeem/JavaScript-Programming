//Closure Loops: It will working with IIFE(Immediate Invoking Functional Expression)

for (var i = 1; i <= 5; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, 1000 * n);
  })(i);
}
