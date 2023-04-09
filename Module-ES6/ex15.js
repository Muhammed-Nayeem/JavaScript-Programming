//WeakMap:
let a = {a: 10}, b = {b: 20};

let weakMap = new WeakMap([[a, b]]);
console.log(weakMap);

// a = null;

// console.log(weakMap);
