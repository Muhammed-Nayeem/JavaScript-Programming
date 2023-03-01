// number data type: number is declared by two ways - i) number literal, ii) number constructor;
//number literal:
var numOne = 10;
var numTwo = 20;
var numThree = 30;
var numFour = 40;

var sum = numOne + numTwo + numThree + numFour;
var averageOfFourNumbers = sum / 4;

console.log("Sum is: "+ sum);
console.log("Average is: "+ averageOfFourNumbers);

//number constructor:
var bankAccountId = Number(123456789);
console.log(bankAccountId);

// you can check also how many numbers store in a variable:
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

// you can parse the number integer to float or float to integer:
var x = 10.456;
var intX = Number.parseInt(x);
console.log(intX);

var y = 20;
var floatY = Number.parseFloat(y);
console.log(floatY);
