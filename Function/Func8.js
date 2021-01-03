//Inner Function:
function something(greet, name) {
  function sayHi() {
    console.log(greet, name);
  }
  sayHi();
}
something("Good Evening!", "Muhammed Nayeem");

//Second Example of Inner Function:
function innerFunction(greet, name) {
  function getFirstName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "";
    }
  }
  var message = greet + " " + getFirstName();
  console.log(message);
}
innerFunction("Good Morning!", "Muhammed Nayeem");