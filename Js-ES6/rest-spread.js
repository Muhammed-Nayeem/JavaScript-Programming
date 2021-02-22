//Rest and Spread Operator Using:
//i) ... if we use this as any function parameter than we have to call it REST Operator, otherwise we can call it SPREAD Operator;

//REST Operator:
/*
function add(...rest) {
  return rest.reduce((a, b) => {
    return a + b;
  });
  // return rest.reduce((a, b) => a + b);
}
console.log(add(1, 2, 3, 4, 5));
// add(1, 2, 3, 4, 5);
*/

//SPREAD Operator:
let a = [1, 2, 3];
console.log(...a);

let obj = {
  a: 10,
  b: 20,
  c: 30,
};

let obj2 = {
  ...obj,
};
console.log(obj2);
