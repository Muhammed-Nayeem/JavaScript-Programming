//Object is not Iterable:
// let obj = {
//   start: 1,
//   end: 5,
// };
// for (let i of obj) {
//   console.log(i);
// }

//Make Custom Iterable Object:
let obj = {
  start: 1,
  end: 5,

  [Symbol.iterator]: function () {
    let currentValue = this.start;
    let self = this;

    return {
      next() {
        return {
          done: currentValue > self.end,
          value: currentValue > self.end ? undefined : currentValue++,
        };
      },
    };
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
