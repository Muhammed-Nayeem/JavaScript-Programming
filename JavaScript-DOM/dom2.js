// Elements select by querySelector: Id
let title = document.querySelector("#title");
console.log(title);

// Elements select by querySelector: ClassName
let paragraph = document.querySelector(".lead");
console.log(paragraph);

let paragraphs = document.querySelectorAll(".lead");
console.log(paragraphs);

// Elements select by querySelector: TagName
let lists = document.querySelectorAll("li");
console.log(lists);

// Elements select by querySelector: Name
let listItem = document.querySelector('[name^="list-item-one"]');
console.log(listItem);
