// Ternary Operator:
// var x = 10;
// var y = 20;

// var result = (x > y) ? x : y;
// console.log(result);


// var result2 = (x % 2 === 0) ? "Even" : "Odd";
// console.log(result2);

// var Mname = "";
// var fullName = "";

// if (Mname.length === 0) {
//   fullName = "Muhammed Nayeem";
// } else {
//   fullName = Mname;
// }

// console.log(fullName);

var fName = "";
var fullName = fName || "Muhammed Nayeem";
console.log(fullName);

var isOk = true;
isOk && console.log("I am Alive");
