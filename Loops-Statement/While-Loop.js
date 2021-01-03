//Name Printing 10 times:
var i = 0;

while (i < 10) {
  console.log((i + 1) + ' Nayeem Shakib');
  i++;
}
console.log('\n');

//Random Number Generate 1 to 10:
var isRunning = true;

while (isRunning) 
{
  var rand = (Math.floor(Math.random() * 10 + 1));
  if (rand === 9) 
  {
    console.log('Winner Winner Chicken Dinner!');
    isRunning = false;
  } 
  else 
  {
    console.log('You have got : ' + rand);
  }
}
console.log('\n');

//Summation of Even Number between 1 to 10:
var sum = 0;
var i = 1;

while (i <= 10) 
{
  if (i % 2 === 0) 
  {
    sum = sum + i;
  }
  i++;
}
console.log('Summation of even number between 1 to 10 : ' + sum + '\n');

//Summation of Odd Number between 1 to 10:
var sm = 0;
var j = 1;

while (j <= 10)
{
  if (j % 2 != 0)
  {
    sm += j;
  }
  j++;
}
console.log('Summation of odd number between 1 to 10: ' + sm + '\n');