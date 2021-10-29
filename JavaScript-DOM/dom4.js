// Traversing HTML Collection throw Loop: Convert HTML Collection into an Array.

let listItem = document.getElementsByTagName("li");
// console.log(listItem);

//Converting into an Array: Three different ways;
let listItems1 = Array.from(listItem);
let listItems2 = Array.prototype.slice.apply(listItem);
let listItems3 = [...listItem];

listItems3.forEach((li, ind) => {
  let text = li.innerHTML;
  li.innerHTML = `(${ind + 1}) ${text}`;
});
