//Iterator generate by Generator Function:
let obj = {
  start: 1,
  end: 5,

  //Making Generate Function:
  [Symbol.iterator]: function* () {
    let currentValue = this.start;
    while (currentValue <= this.end) {
      yield currentValue++;
    }
  },
};
let iterate = obj[Symbol.iterator]();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

//Making Generate Function:
function* generate() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
let it = generate();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//Making Generate Function:
let arr = [1, 2, 3, 4, 5];
function* generator(collection) {
  for (let i = 0; i < collection.length; i++) {
    yield collection[i];
  }
}
let itr = generator(arr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());