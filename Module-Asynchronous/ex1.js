//Async value store:
function getResult(name) {
  let result;
  setTimeout(() => {
    result = name;
    console.log(result);
  }, 3000);
  // return result;
}

const res = getResult("Nayeem");
console.log(res);
