//Iterate Object Properties:
var point = {
  x: 10,
  y: 20,
  z: 30,
};

// console.log('y' in point);

for (var i in point) {
  console.log(i +": "+ point[i]);
}
