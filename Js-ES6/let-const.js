// Using let and const for variable declaration:
//i) Using let:
let x = 10;
x = 30;
console.log(x);

//Btu in block wise it will not exist out of it's own block:
let sum = 0;
if (true) {
  let a = 10;
  let b = 20;
  let sub = a - b;
  console.log(sub);
  sum = a + b;
}
console.log(sum);

//Using const:
const num = 500;
if (true) {
  const m = 600;
  console.log(m);
}
console.log(num);