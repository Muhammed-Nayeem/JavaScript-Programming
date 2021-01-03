var str1 = 'This is string one';
var str2 = 'This is string two';
var str3 = `This is string three`;

var str4 = String('Another String declaration way by built in String constructor'); //built in String constructor;
var str5 = String(12345); //converted a number into string by String constructor;
var str6 = String(12.45);

console.log('First String : ' + str1);
console.log('Second String : ' + str2);
console.log('Third String : ' + str3);

console.log('Fourth String : ' + str4);
console.log('Fifth String : ' + str5);
console.log('Sixth String : ' + str6);

console.log(Number(str5));