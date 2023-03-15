const inputField = document.getElementById("delete-confirm");
inputField.addEventListener("keyup", function (event) {
  const text = event.target.value;
  let deleteBtn = document.getElementById("delete-btn");
  if (text.toLowerCase() === "delete".toLowerCase()) {
    deleteBtn.removeAttribute("disabled");
  } else {
    deleteBtn.setAttribute("disabled", true);
  }
  document.getElementById("delete-btn").addEventListener("click", function () {
    let repository = document.getElementById("repository");
    repository.style.display = "none";
    inputField.value = "";
  });
});
