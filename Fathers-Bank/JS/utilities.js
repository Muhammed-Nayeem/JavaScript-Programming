//Bank utilities functions:
const getTextElementsValueById = (textElementId) => {
  let textElements = document.getElementById(textElementId);
  let textElementValue = parseFloat(textElements.innerText);
  return textElementValue;
};

const getInputValueById = (inputId) => {
  let inputField = document.getElementById(inputId);
  let inputFieldValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputFieldValue;
};

const setTextElementValueById = (textElementId, calculateInputValue) => {
  let textElement = document.getElementById(textElementId);
  textElement.innerText = calculateInputValue;
};
