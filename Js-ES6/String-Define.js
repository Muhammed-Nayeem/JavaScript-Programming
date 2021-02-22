//String Define with back-tic in Js version ES6:
var Name = `Nayeem`;
var Name2 = `Shakib`;
var age = 22;
var age2 = 17;

//String Template with back-tic and ${one-line statement} this way:
console.log(`My name is ${Name} and I am ${age} years old and I am ${age < 18 ? 'not ':''}adult`);
console.log(`My name is ${Name2} and I am ${age2} years old and I am ${age2 < 18 ? 'not ':''}adult`);

//Methods:
//i) padStart: means must have 15 letters in name, if not than it'll start with #;
//ii) padEnd: means must have 15 letters in name, if not than it'll end width *;
//iii) repeat(): means give a value how many time you want to repeatation;
console.log(Name.padStart(15, `#`));
console.log(Name2.padStart(15, `*`));
console.log(Name.padEnd(15, `m`));
console.log(Name2.padEnd(15, `b`));
console.log(`We Love Our Parents Very Much `.repeat(10));