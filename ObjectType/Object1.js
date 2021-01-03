//How to declare an Object and hot to use it: i)Object Literal and ii)Object Constructor;
//Values insert in empty object from outside:
var obj = {};
obj.x = 10;
obj.y = 20;
console.log(obj);

//Values insert initially in object:
var obj2 = { A: 30, B: 40 };
console.log(obj2);

//Third Object:
var nayeem = {M: 50};
nayeem.N = 60;
nayeem.O = 70;
console.log(nayeem);

//Fourth Object:
var shakib = {S: 80};
shakib.H = 90;
shakib.I = 100;
console.log(shakib);

//Object Declare using object Constructor:
var point = Object();
point.P = 110;
console.log(point);

//new keyword:
var ob = new Object();
ob.V = 120;
console.log(ob);