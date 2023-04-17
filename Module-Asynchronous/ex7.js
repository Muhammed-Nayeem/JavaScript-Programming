let p1 = new Promise((resolve) => {
  setTimeout(resolve, 4000, "Test One");
});

let p2 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Test Two");
});

let p3 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "Test Three");
});

let promiseArr = [p1, p2, p3];

Promise.all(promiseArr).then((arr) => {
  console.log(arr);
});

Promise.race(promiseArr).then((v) => {
  console.log(v);
});
