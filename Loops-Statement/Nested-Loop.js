//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
//How to print this format by using nested-loop:
var i, j;

for (i = 1; i <= 10; i++)
{
  var result = '';
  for (j = 1; j <= i; j++)
  {
    result += j + ' ';
  }
  console.log(result);
}
console.log('\n');


//Start Pattern Printing:
var k = 10;
var m, n;
for (m = 1; m <= k; m++)
{
  var result = ''
  for (n = 1; n <= k; n++)
  {
    result += '* '
  }
  console.log(result);
}