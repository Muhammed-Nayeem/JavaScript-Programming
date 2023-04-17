let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Test Value");
});

// console.log(p1);

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Another Test Value");
});

// console.log(p2);

// p1.then((res) => console.log(res));

// p2.then((res) => console.log(res));

function getIphone(isPassed) {
  return new Promise((resolve, reject) => {
    if (isPassed) {
      resolve("I have got an Iphone");
    } else {
      reject("You have Failed!");
    }
  });
}

getIphone(false)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
