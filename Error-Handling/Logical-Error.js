//Logical Error Handling with If-Else:

function changeToInt(n) {
  let result = Number.parseInt(n);
  if (!result) {
    // console.log("Please provide a value which is able to convert in Integer");
    // return;
    return "Please provide a value which is able to convert in Integer";
  }
  return result;
}
let res = changeToInt("twrwr68.534534fdsrete");
// let res = changeToInt('45.54653');
console.log(res);
