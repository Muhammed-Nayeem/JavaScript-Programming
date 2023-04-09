//iterator in ES5:
let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i <= arr.length; i++) {
//   console.log(arr[i]);
// }

function createIterator(collection) {
  let i = 0;
  return {
    next() {
      return {
        done: i >= collection.length,
        value: collection[i++],
      };
    },
  };
}

let iterator = createIterator(arr);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
