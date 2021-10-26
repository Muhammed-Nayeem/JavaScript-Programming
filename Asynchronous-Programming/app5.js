//Fetching API:
const baseURL = "https://jsonplaceholder.typicode.com";

// fetch(`${baseURL}/users/1`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     return Promise.resolve("Something Happened");
//   })
//   .then((str) => {
//     console.log(str);
//     return Promise.resolve("Another Promise");
//   })
//   .then((another) => {
//     console.log(another);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Creating Promise Fetch API:
function getRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);

    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.response);
          resolve(data);
        } else {
          reject(new Error("Error Ocurred! Please try again."));
        }
      }
    };
    xhr.send();
  });
}

getRequest(`${baseURL}/users/1`)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
