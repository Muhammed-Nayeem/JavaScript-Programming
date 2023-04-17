//Optional Catch Binding:

//Throwing a new Error:
try {
  console.log("I am the line no One");
  throw new Error("I am the Error");
  console.log("I am the line no Two");
} catch {
  console.log("This is Error Message!");
} finally {
  console.log("I will be called in every situation!");
}
