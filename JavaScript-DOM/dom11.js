//Event Handling: Mouse Movement
let box = document.querySelector(".box");
box.addEventListener("mousemove", function (e) {
  // document.getElementById("x-value").innerHTML = e.clientX;
  // document.getElementById("y-value").innerHTML = e.clientY;

  document.getElementById("x-value").innerHTML = e.offsetX;
  document.getElementById("y-value").innerHTML = e.offsetY;

  if (e.offsetX === 50 && e.offsetY === 50) {
    alert("X and Y is equal");
  }
});

//Event Handling: Add and Delete
let list = document.getElementById("list");

//Event Delegation Problem:
// [...list.children].forEach((li) => {
//   li.addEventListener("click", function (e) {
//     e.target.remove();
//   });
// });

//Event Delegation Problem Solution:
list.addEventListener("click", function(e) {
  // console.log(this.contains(e.target));
  if (this.contains(e.target)) {
    e.target.remove();
  }
});

let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  let lastChild = list.lastElementChild.cloneNode(true);
  lastChild.innerHTML = "Newly Created Item";
  list.appendChild(lastChild);
});
