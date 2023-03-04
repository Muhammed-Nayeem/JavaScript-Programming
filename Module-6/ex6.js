//Comparing Two Object:
var point = {
  x: 10,
  y: 20,
  z: 30,
};

var point2 = {
  x: 10,
  y: 20,
  z: 30,
};


// console.log(point === point2); //Do not possible like this;


//comparing each properties of both object:
// if (point.x === point2.x && point.y === point2.y && point.z === point2.z) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//stringify method:
console.log(JSON.stringify(point) === JSON.stringify(point2));
