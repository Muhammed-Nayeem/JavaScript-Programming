//Styling with DOM Elements:
let title = document.getElementById("title");
// title.style.color = "#f00";
// title.style.textAlign = "center";

let styleObj = {
  fontSize: "20px",
  color: "#f00",
  textAlign: "center",
};

Object.assign(title.style, styleObj);
