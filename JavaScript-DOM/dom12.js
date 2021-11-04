//Ul - List Elements Event Handling:
let list = document.getElementById("list");
list.addEventListener("dblclick", function(event) {
  if (this.contains(event.target)) {
    let innerText = event.target.innerText;
    event.target.innerHTML = "";
    let inputBox = createInputBox(innerText);
    event.target.appendChild(inputBox);

    inputBox.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        event.target.innerHTML = e.target.value;
      }
    });
  }
});

//Create Input Element Function:
function createInputBox(value) {
  let inp = document.createElement("input");
  inp.type = "text";
  inp.className = "input-form";
  inp.value = value;
  return inp;
}


//Input Elements and Event Handling:
let nameText = document.getElementById("name");
nameText.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("show-name").innerHTML = `Your name is: ${event.target.value}`;
    event.target.value = "";
  }
});


//Checkbox Event Handling: Add and Delete and also update
let skills = document.getElementsByName("skills");
let arrOfSkills = [...skills];
let showSkills = document.getElementById("chosen-skills");
let selectedSkills = [];

//For add and remove and also update:
arrOfSkills.forEach(skill => {
  skill.addEventListener("change", function(event) {
    if (event.target.checked) {
      selectedSkills.push(event.target.value);
      outputSkills(showSkills, selectedSkills);
    } else {
      let ind = selectedSkills.indexOf(event.target.value);
      selectedSkills.splice(ind, 1);
      outputSkills(showSkills, selectedSkills);
    }
  });
});

//Function to show the selected skills in the right place:
function outputSkills(parent, skills) {
  let skillResult = "";
  skills.forEach((skill, index) => {
    skillResult += `(${index + 1}) ${skill} `;
  });
  parent.innerHTML = skillResult;
}
