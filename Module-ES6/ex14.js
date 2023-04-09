//weakSet:
let a = {a: 10}, b = {b: 20};
// let test = new Set([a, b]);
// console.log(test);

// a = null;

// console.log(test);

// let arr = [...test];
// console.log(arr[0]);

let test2 = new WeakSet([a, b]);
console.log(test2);

test2.add(c = {c: 30});
console.log(test2);

test2.delete(c);
console.log(test2);

console.log(test2.has(c));

console.log(test2);
