//Deal with Attributes:
let list = document.getElementById("list");

// console.log(list.attributes);
// console.log(list.getAttribute("id"));
// console.log(list.getAttributeNode("class"));
// console.log(list.getAttributeNames());
// console.log(list.classList);
// console.log(list.className);

let lastItem = list.lastElementChild;
// lastItem.id = "li-last";
// lastItem.classList.add("item");
lastItem.setAttribute("title", "I am last");

// let attr = document.createAttribute("name");
// attr.value = "list-items";
// lastItem.setAttributeNode(attr);
