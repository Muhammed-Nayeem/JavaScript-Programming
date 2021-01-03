//How to iterate of an object: i)For In Loop;
var obj = {
  x: 10,
  y: 20,
  z: 30
};
// console.log('x' in obj);
// console.log('p' in obj);

//Traversing an Object:
for (var i in obj)
{
  console.log(i);
  console.log(i +':' + obj[i]);
}