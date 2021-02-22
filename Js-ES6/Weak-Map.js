let a = {a: 10}, b = {b: 20};
// let weakMap = new WeakMap([[a, b]]);
let weakMap = new WeakMap([[a, 30], [b, 50]]);
a = null;
console.log(weakMap.has(a));
console.log(weakMap.get(b));
console.log(weakMap.delete(b));
console.log(weakMap);