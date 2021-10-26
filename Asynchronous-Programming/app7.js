//Async-Await Function:
// function myPromise() {
//   return Promise.resolve("Test Value");
// }
// console.log(myPromise());
// myPromise().then((res) => {
//   console.log(res);
// });

// async function test() {
//   return "Simple Test";
// }
// console.log(test());
// test().then((v) => alert(v));

// let p1 = new Promise(resolve => {
//   setTimeout(resolve, 5000, 'Test Values')
// })

// async function myAsyncFunc() {
//   let v = await p1;
//   // console.log('test');
//   console.log(v);
// }
// myAsyncFunc();

// async function fetchData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/user");
//     let data = await res.json();
//     console.log(data);
//     // data.map((n) => {
//     //   console.log(n.name);
//     // });
//   } catch (err) {
//     console.log(err.message);
//   }
// }
// fetchData();

let promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(4),
];

async function myFunc() {
  let res = await Promise.all(promises);
  console.log(res);
}
myFunc();
