//Continue Statement: it means skip some values from the loop in execution time;
var i;
for (i = 1; i <= 10; i++)
{
  if (i === 3 || i === 7)
  {
    continue;
  }
  else
  {
    console.log(i);
  }
}