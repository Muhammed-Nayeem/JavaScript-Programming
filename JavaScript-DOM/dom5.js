//How To Create DOM Elements:
let li = document.createElement("li");
li.className = "list-item";
li.setAttribute("name", "I am Fifth");
li.innerHTML = "Five";

let list = document.getElementById("list");
list.appendChild(li);


//CreateElement Function:
function createElement(tagName, className, innerHTML) {
  let tag = document.createElement(tagName);
  tag.className = className || "";
  tag.innerHTML = innerHTML || "";
  return tag;
}

//AppendChild Function:
function append(parent, children) {
  children.forEach(child => parent.appendChild(child));
}

let li2 = createElement("li", "list-item", "Six");
let li3 = createElement("li", "list-item", "Seven");

append(list, [li2, li3]);

let p1 = createElement("p", "lead", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, ab? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, ab?");

let p2 = createElement("p", "lead", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, ab? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, ab?");

let div = createElement("div", "paragraph-box");

append(div, [p1, p2]);

// document.getElementsByClassName("container")[0].appendChild(div);

let container = document.getElementById("cont");
container.appendChild(div);
console.log(container);