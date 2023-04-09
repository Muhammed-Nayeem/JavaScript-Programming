//generator:
// function * generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let it = generator();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//Make custom iterable object with generator:
let obj = {
  start: 1,
  end: 5,

  [Symbol.iterator]: function* () {
    let currentValue = this.start;
    while (currentValue <= this.end) {
      yield currentValue++;
    }
  },
};

// for (let v of obj) {
//   console.log(v);
// }

let iterator = obj[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


//generator function of collection:
// let arr = [1, 2, 3, 4, 5];
// function* generator(collection) {
//   for (let i = 0; i < collection.length; i++) {
//     yield collection[i];
//   }
// }

// let it = generator(arr);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

