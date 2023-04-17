//Logical Error:

function changeInt(v) {
  let result = parseInt(v);

  if (!result) {
    return "Please Provide a valid number!";
  }

  return result;
}

// let res = changeInt(10.506);
let res = changeInt("This  not valid Number");
console.log(res);
