//How to use string in different situations: 
var str = 'This is a string';
var str2 = 'This is another string';
var str3 = String('Something that is string');

console.log(str, str2, str3);

var n = 10;
var st = n + ' '; // converted into string from number;
var st2 = n.toString(); // converted into string by using built in method;
var st3 = String(n); // converted into string by using constructor;

console.log(n, st, st2, st3);

//Don't do this thing when converted a number into string like this: 
var m = 10;
var strn = new String(m);
console.log(strn.toString());