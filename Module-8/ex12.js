//return a function from another function:
function greeting(name) {
  return function (msg) {
    if (name) {
      var firstName = name.split(" ")[0];
      return msg + "! " + firstName;
    }
  };
}

var gm = greeting("Muhammed Nayeem");
console.log(gm("Good Morning"));

var gn = greeting("Muhammed Nayeem");
console.log(gn("Good Night"));
