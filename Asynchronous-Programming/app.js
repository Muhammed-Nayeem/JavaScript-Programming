// console.log('I am lIne one');
// console.log('I am line two');
// console.log('I am line three');
// console.log('I am line four');
// console.log('I am line five');

// setTimeout(() => {
//   console.log("I have done after five second");
// }, 5000);



//Asynchronous JavaScript:
console.log("I am line one");

setTimeout(() => {
  console.log("I am line two");
}, 3000);

setTimeout(() => {
  console.log("I am line three");
}, 0);

console.log("I am line four");

setTimeout(() => {
  console.log("I am line five");
}, 1000);
