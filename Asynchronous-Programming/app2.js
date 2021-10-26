//How to store result returned from asynchronous function:

//Got Undefined:
// function sayHello(msg, Name) {
//   let greet;
//   setTimeout(() => {
//     greet = `${msg}! ${Name}`;
//     console.log("I have done after 3 second...");
//   }, 3000);
//   return greet;
// }
// let output = sayHello("Good AfterNoon", "Muhammed Nayeem");
// console.log(output);

//solution: In this case we've to finish the task where the asynchronous system working:
function sayHi(msg, Name) {
  let greet;
  setTimeout(() => {
    greet = `${msg}! ${Name}`;
    console.log(greet); //finish the task;
  }, 3000);
}
sayHi('Good AfterNoon', 'Muhammed Nayeem');
