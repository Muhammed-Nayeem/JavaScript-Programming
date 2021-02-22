let arr = [1, 2, 3, 4];

//Create Iterator with ES6 terms:
let iterate = arr[Symbol.iterator]();

console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

//string iterator:
let str = `text is mine`;
let strIterator = str[Symbol.iterator]();

console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
