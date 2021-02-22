//Default Parameter:
function sqr(n = 1) {
  // n = n || 1;
  return n * n;
}
console.log(sqr(5));


// function greet(name = `Nayeem`, msg = `Hello`) {
//   console.log(name.length);
//   console.log(`${msg}! ${name}`);
// }
// greet(null, `Hello`);