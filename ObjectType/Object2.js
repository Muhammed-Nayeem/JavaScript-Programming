//How to Access an Object properties : i).dot notation and ii)array[] notation;
var point = { 
  x: 20,
  y: 30,
  z: 40
};
console.log(point.x);
console.log(point.y);
console.log(point.z);
console.log(point.x + point.y + point.z);


console.log(point['x']);
console.log(point['y']);
console.log(point['z']);
console.log(point['x'] + point['y'] + point['z']);

var show = 'x';
console.log(point[show]);