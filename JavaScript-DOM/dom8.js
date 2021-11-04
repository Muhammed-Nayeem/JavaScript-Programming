//Using CloneNode:
let ul_list = document.getElementById("list");

let last_Child = ul_list.lastElementChild.cloneNode(true);
last_Child.innerHTML = "Five";
ul_list.appendChild(last_Child);
