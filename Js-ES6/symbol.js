//Symbol Introduction:
let s1 = Symbol();
let s2 = Symbol(`test symbol`);

console.log(s1);
console.log(s2);

let check = s1 === s2;
console.log(check);

let toss = {
  head: Symbol(`Head`),
  tail: Symbol(`Tail`),
};
console.log(toss);
