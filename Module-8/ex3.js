//Higher Order Function:
function sum(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  let c = a + b;
  let d = a - b;
  function multiply() {
    let m = func(a, b);
    return m * c * d;
  }
  return multiply;
}

const result = manipulate(3, 4, sum);
console.log(result());
