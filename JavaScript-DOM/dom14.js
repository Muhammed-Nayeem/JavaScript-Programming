//Send Get Request and handle data:
const URL = "https://jsonplaceholder.typicode.com/posts";
let loadPost = document.getElementById("load-btn");
let postsList = document.getElementById("post-list");

loadPost.addEventListener("click", function (e) {
  fetch(URL)
    .then((res) => res.json())
    .then((postsData) => {
      postsData.forEach((post, index) => {
        let postItem = generateItems(post, index + 1);
        postsList.appendChild(postItem);
      });
    })
    .catch((e) => {
      console.log(e.message);
    });
});

function generateItems(item, ind) {
  let li = document.createElement("li");
  li.className = "list-item";
  li.innerHTML = `${ind}. ${item.title}`;
  return li;
}
