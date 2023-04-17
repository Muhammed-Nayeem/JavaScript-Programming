//Throwing a new Error:
try {
  console.log("I am the line no One");
  throw new Error("I am the Error");
  console.log("I am the line no Two");
} catch(e) {
  console.log(e.message);
}
