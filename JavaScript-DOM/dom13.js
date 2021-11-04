//How To Handle Form Data in DOM:
let form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  // console.log(this.elements[0]);
  // console.log(this["email"]);
  let formElements = [...this.elements];
  let formData = {};
  let isValid = false;
  // let invalid = document.querySelector(".invalid-feedback");

  formElements.forEach(el => {
    // console.log(el.type, el.name, el.value);
    if (el.type !== "submit") {
      isValid = validator(el);
      if (isValid) {
        formData[el.name] = el.value;
      } else {
        // invalid.style.display = "block";
        // invalid.style.color = "red";
        alert(`${el.name} is required`);
      }
    }
  });
  if (isValid) {
    console.log(formData);
    // console.log(Object.keys(formData).length);
    this.reset();
  }
});


//Validation:
function validator(el) {
  if (!el.value) {
    return false;
  } else {
    return true;
  }
}
