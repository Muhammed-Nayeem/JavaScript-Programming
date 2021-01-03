//How to use Do While Loop:
var isRunning = false;

do{
  console.log('I am Running at least one time for based on my condition');
} while (isRunning);
console.log('\n');

//Even Number between 1 to 10: 
var i = 1;

do {
  if (i % 2 === 0)
  {
    console.log(i);
  }
  i++;
} while (i <= 10);
console.log('\n');

//Odd Number between 1 to 10:
var j = 1;

do {
  if (j % 2 != 0)
  {
    console.log(j);
  }
  j++;
} while(j <= 10);
console.log('\n');

//Summation of Even Number between 1 to 10:
var n = 1;
var sum = 0;

do {
  if (n % 2 === 0)
  {
    sum += n;
  }
  n++;
} while (n <= 10);
console.log(sum);