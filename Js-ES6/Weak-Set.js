//EX: without WeakSet:
let a = {a: 10}, b = {b: 20};
// let set = new Set([a, b]);
// a = null;
// console.log(set);

// let arr = [...set];
// console.log(arr[0]);

let weakSet = new WeakSet([a, b]);
a = null;
let c = {c: 30};
weakSet.add(c);
console.log(weakSet.has(c));
weakSet.delete(b);
console.log(weakSet);