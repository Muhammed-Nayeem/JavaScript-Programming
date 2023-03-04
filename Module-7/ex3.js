//Argument Object:
function machine() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

machine(10, 20, 30, 40, 50);
