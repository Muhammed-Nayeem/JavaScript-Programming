//object methods:
var point = {
  x: 10,
  y: 20,
  z: 30,
};

console.log(Object.keys(point));
console.log(Object.values(point));
console.log(Object.entries(point));

//Object clone:
var point2 = Object.assign({}, point);
point2.m = 40;
point2['n'] = 50;


console.log(point);
console.log(point2);
