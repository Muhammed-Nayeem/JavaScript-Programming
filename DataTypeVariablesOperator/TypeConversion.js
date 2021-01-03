//Type conversion means convert a data type into another data type, like string covert in number;

var str = '1000';
var n = 10;

// console.log(Number(str)); By Built in Constructor;
console.log(Number.parseInt(str) + 10); //By parseInt() built in method;

console.log(n.toString()); // number converted into string by built in method toString();

var x = true;
console.log(x.toString());

console.log(String(Infinity));

//Falsy values in Js: ' ', null, undefined, nan, 0;
//Truthy values in Js: Without 0 ,,,Every values is truthy value;

console.log(Boolean(''));
console.log(Boolean('ddgfdsegd'));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(Infinity));
console.log(Boolean(0));
console.log(Boolean(10));

//Constructor : Number, String, Boolean;