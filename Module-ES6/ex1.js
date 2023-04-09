//Arrow Function:
const square = x => x * x;
console.log(square(2));

const add = (a, b) => a + b;
console.log(add(5, 10));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNum = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(evenNum(arr));
