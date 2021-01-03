//Common methods in object: keys, values, entries;
var obj = {
  x: 10,
  y: 20,
  z: 30
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

//Create a clone object from main object using assign{} built in method:
var obj2 = Object.assign({}, obj);
obj2.x = 50;
obj2.y = 80;
obj2.z = 110;
console.log(obj2);
console.log(obj);