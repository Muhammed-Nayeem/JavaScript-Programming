//There are different kinds of operators in JavaScript;
//1) Arithmetic Operators: +, -, *, /, %, ++, --;
var numOne = 10;
var numTwo = 3;
var a = 6;
var b = 8;

var sum = numOne + numTwo;
var sub = numOne - numTwo;
var mul = numOne * numTwo;
var div = numOne / numTwo;
var mod = numOne % numTwo;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);

console.log(++numOne); //Pre-Increment : At first value will be increased and than print output;

console.log(numTwo++); //Post-Increment : At first value will be printed and than value increased;
console.log(numTwo); // output : 4; bcz value increased here;

console.log(--a); // output : 5;

console.log(b--); // output : 8;
console.log(b); // output : 7;



//Assignment Operators : It's mean assigning the value by using this operators;
// =, +=, -=, *=, /=, %=;
var a = 10;
var b = 20;

a += b;
console.log(a);

a -= b;
console.log(a);

a *= b;
console.log(a);

a /= b;
console.log(a);

a %= b;
console.log(a);



//Comparision Operators: ==, ===, >, <, >=, <= !=;
var a = 10;
var b = 20;
var x = '50';
var y = 50; 
var value;

value = (a > b) ? a : b; //Ternary Operator;

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b)

console.log(x === y);

console.log(value);

//Bitwise Operators : &,  | , ^ , >>, <<, ~;
var a = 32;
var b = 12;
var c, d, e, f, g, h;

c = a & b;
d = a | b;
e = a ^ b;
f = a >> 3;
g = a << 2;
h = a ^ b;
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);