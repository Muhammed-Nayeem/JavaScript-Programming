//Rest and Spread Operators:
let add = (...rest) => {
  let sum = rest.reduce((prev, curr) => prev + curr);
  return sum;
};

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...arr);

const arr2 = [10, 20, 30, ...arr];
console.log(arr2);
