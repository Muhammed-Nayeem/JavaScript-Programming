//Understanding Promise:
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "One");
// });
// p1.then((v) => {
//   console.log(v);
// }).catch((e) => {
//   console.log(e);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "Two");
// });
// p2.then((v) => {
//   console.log(v);
// }).catch((e) => {
//   console.log(e);
// });



//simple promise api using asynchronous:
function getIphone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve("I have got an Iphone X");
      } else {
        reject(new Error("You have failed!"));
      }
    }, 5000);
  });
}

getIphone(true)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

getIphone(false)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });