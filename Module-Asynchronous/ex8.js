// let p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "Test Value");
// });

// async function test() {
//   let res = await p1;
//   console.log(res);
// }

// test();

const base_url = "https://jsonplaceholder.typicode.com/users";

const fetchData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

fetchData(base_url);
