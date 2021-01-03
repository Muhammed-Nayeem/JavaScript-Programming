//How to updated the values of an object properties:
var point = {
  x: 10,
  y: 20,
  z: 30
}

point.x = 50;//replace the old value from object properties;
point.a = 40;
console.log(point);
console.log(point.d);//it'll be undefined;

point['y'] = 100;

var prop = 'z';
point[prop] = 60;
console.log(point);

//Removing way to remove a property from an object:
point.a = undefined;
console.log(point);

delete point.a;//this is the right way to delete a property from an object;
console.log(point);