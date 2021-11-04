//Update and Remove Elements:
let list = document.getElementById("list");

let firstChild = list.firstElementChild;

//Update:
setTimeout(() => {
  firstChild.innerHTML = firstChild.innerHTML + "(modified)";
  firstChild.classList.add("li-item");
}, 5000);

//Remove:
setTimeout(() => {
  list.lastElementChild.remove();
}, 3000);
