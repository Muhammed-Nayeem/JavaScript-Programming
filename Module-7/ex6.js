//Inner function:
function sayHi(name, msg) {
  function greetings() {
    var result;
    if (name) {
      result = name.split(" ")[0];
    }
    return result;
  }
  var message = msg +"! "+ greetings();
  return message;
}

console.log(sayHi("Muhammed Nayeem", "Good Morning"));
