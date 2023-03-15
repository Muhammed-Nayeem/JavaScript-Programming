//pure function:
// i) if you gave the same argument, you'll get the same result;
// ii) it does not cause any observe-able side effects;

function square(n) {
  return n * n;
}

console.log(square(2));
console.log(square(2));
console.log(square(2));

//side effects:
// let num = 100;

// function change() {
//   num = num + 10;
//   console.log(num);
// }
// change();
// console.log(num);

//side effects:
// let test = {
//   x: 100,
//   y: 200,
// };

// function sample(obj) {
//   obj.x = obj.x + 50;
//   obj.y = obj.y - 30;
//   console.log(obj);
// }
// sample(test);
// console.log(test);
