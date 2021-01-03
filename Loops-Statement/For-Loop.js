var i, j, n, m = 0;
var sum = 0;


//Name Printing: 
/*
var name = 'Nayeem Shakib';
for (i = 0; i < 10; i++)
{
  console.log((i + 1) + ' ' + name)
}
*/


//Number Printing 1 t0 10:
/*
for (i = 0; i < 10; i++)
{
  console.log(i+1);
}
*/


//Reverse Number Printing 10 to 1:
/*
for (i = 10; i >= 1; i--)
{
  console.log(i);
}
*/


//Summation of Odd number between 1 to 10:
/*
for (i = 1; i <= 10; i++)
{
  if (i % 2 != 0)
  {
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum = sum + i;
  }
}
console.log('Summation of Odd Number : ' + sum);
*/


//Summation of even number between 1 to 10:
/*
for (i = 1; i <= 10; i++)
{
  if (i % 2 === 0)
  {
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum += i;
  }
}
console.log('Summation of Even Numbers : ' + sum);
*/


//Summation of between 1 to 100:
/*
for (i = 1; i <= 100; i++)
{
  console.log(sum + ' + ' + i + ' = ' + (sum + i));
  sum += i;
}
console.log('Summation is : ' + sum);
*/


//Multiplication table 1 to 20:
for (i = 1; i <= 20; i++)
{
  for (j = 1; j <= 10; j++)
  {
    m += i;
    console.log(i +' X '+ j +' = '+ m);
  }
  m = 0;
  console.log('\n');
}