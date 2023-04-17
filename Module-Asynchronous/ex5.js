function getRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);

    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 400) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(new Error("Error Occurred!"));
        }
      }
    };
    xhr.send();
  });
}

getRequest("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
