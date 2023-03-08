//composition:
function print(inp) {
  console.log(inp);
}

function multiplyByFive(n) {
  return n * 5;
}

function sum(a, b) {
  return a + b;
}

print(multiplyByFive(sum(5, 3)));
