//How to throw custom error with try-catch and Error constructor:

// try {
//   console.log("I am JavaScript Programmer");
//   throw new Error("I am the Built in Constructor Error");
//   console.log("I am JavaScript Developer");
//   console.log("I am JavaScript Engineer");
// } catch (e) {
//   console.log(e.message);
// } finally {
//   console.log("I can do everything by logic wise");
// }


//Optional Catch Binding in ESNext:
try {
  console.log("I am JavaScript Programmer");
  throw new Error("I am the Built in Constructor Error");
  console.log("I am JavaScript Developer");
  console.log("I am JavaScript Engineer");
} catch{
  console.log("I am the Error Message");
} finally {
  console.log("I can do everything by logic wise");
}
