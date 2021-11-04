//Handle POST Request:
let postForm = document.getElementById("post-form");
let postsList = document.getElementById("posts");
const URL = "https://jsonplaceholder.typicode.com/posts";

postForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let title = this.title.value || undefined;
  let body = this.body.value || undefined;

  if (title && body) {
    let postData = {
      userId: 100,
      title,
      body,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "Application/JSON",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        let postItem = generateItems(data);
        postsList.appendChild(postItem);
      })
      .catch((e) => console.log(e.message));
      this.reset();
  } else {
    alert("Please Provide the data");
  }
});

function generateItems(item) {
  let li = document.createElement("li");
  li.className = "list-item";
  li.innerHTML = `${item.id}. ${item.title} post by ${item.userId}`;
  return li;
}
