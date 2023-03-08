//sort, some, every method:
var persons = [
  {
    name: "A",
    age: 21,
  },
  {
    name: "B",
    age: 19,
  },
  {
    name: "C",
    age: 26,
  },
  {
    name: "D",
    age: 23,
  },
];

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

var array = [4, 2, 1, 5, 3, 7, 9, 6, 8, 10];
array.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(array);

var res1 = array.every(function(value) {
  return value > 0;
});
console.log(res1);

var res2 = array.some(function(value) {
  return value < 0;
});
console.log(res2);
