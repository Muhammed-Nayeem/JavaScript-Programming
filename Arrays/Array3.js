//Finding the Maximum value and Minimum value from an Array:

var numArr = [10, 60, 30, 50, 100, 90, 80, 70];
var i;
var max = numArr[0];

for (i = 0; i < numArr.length; i++)
{
  if (max < numArr[i])
  {
    max = numArr[i];
  }
}
console.log(max);

var min = numArr[0];
for (i = 0; i < numArr; i++)
{
  if (min > numArr[i])
  {
    min = numArr[i];
  }
}
console.log(min);