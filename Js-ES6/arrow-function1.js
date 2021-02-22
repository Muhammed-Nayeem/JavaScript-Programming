//Normally we used ES5 : function expression either function keyword;
/*
var add = function(a, b) {
  return a + b;
}
console.log(add(10, 20));

function sum(c, d) {
  return c + d;
}
console.log(sum(40, 30));
*/

//But In ES6 have come with cool features that is Arrow Function:
let add = (a, b) => {
  return a + b;
};
console.log(add(20, 30));

let sum = (p, q) => p + q; //Don't need to use return keyword bt js will added return keyword in here implicitly;
console.log(sum(60, 60));

let sqr = x => x * x; //In here Js will added pair of parenthesis and return keyword implicitly;
console.log(sqr(10));

let sample = (a, b, cb) => {
  let c = a + b;
  let d = a - b;

  let result = cb(c, d);
  return result;
}

let addition = (a, b) => {
  return a + b;
};
let subtraction = (a, b) => {
  return a - b;
};

console.log(sample(50, 40, addition));
console.log(sample(50, 40, subtraction));


//Using Arrow Function:
let addAll = (a, b) => {
  return a + b;
}
let manipulate = (a, b, func) => {
  let c = a + b;
  let d = a - b;

  let multiplying = () => {
    let m = func(a, b);
    return m * c * d;
  }
  return multiplying;
}
let result = manipulate(3, 4, addAll);
console.log(result());