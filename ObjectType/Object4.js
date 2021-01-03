//How to comparision in between two Object in js: 
var obj1 = {
  x: 10,
  y: 20
};
console.log(obj1);

var obj2 = {
  x: 10,
  y: 20
};
console.log(obj2);

// console.log(obj1 === obj2); False: bcz of Memory Location;


//Way One : need to compare every single properties from an object;
if (obj1.x === obj2.x && obj1.y === obj2.y)
{
  console.log(true);
} else {
  console.log(false);
}

//Way Two: using 'JSON.stringify()' built in method;
console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));