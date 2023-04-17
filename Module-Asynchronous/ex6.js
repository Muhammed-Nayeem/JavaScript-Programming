const baseUrl = "https://jsonplaceholder.typicode.com/users";

fetch(baseUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return Promise.resolve("A Promise");
  })
  .then((str) => {
    console.log(str);
    return Promise.resolve("Another Promise");
  })
  .then((v) => {
    console.log(v);
  })
  .catch((err) => console.log(err.message));
