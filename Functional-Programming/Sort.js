// Using of Sort, Every, Some built in method with callback function:

var persons = [
  {
    name: "A",
    age: 26,
  },
  {
    name: "B",
    age: 21,
  },
  {
    name: "C",
    age: 24,
  },
  {
    name: "D",
    age: 19,
  },
  {
    name: "E",
    age: 23,
  },
];

var arr = [4, 1, 3, 2, 8, 7, -8, 0, -2, -4, 5, 6, 9, 4, 2, 7, 9, 8, -1];

// arr.sort();
// console.log(arr);

// persons.sort();
// console.log(persons);

//Sorting by the help of Callback-Function:
arr.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arr);

persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(persons);

//Every built in method:
var res1 = arr.every(function (value) {
  return value % 2 === 0;
});
console.log(res1);

var res2 = arr.every(function (value) {
  return value >= 0;
});
console.log(res2);

//Some built in method:
var res3 = arr.some(function (value) {
  return value % 2 === 1;
});
console.log(res3);

var res4 = arr.some(function (value) {
  return value < 0;
});
console.log(res4);
