//Array Traversing :
var num = [4, 5, 1, 6, 8, 9, 40];
var i;
//Traversing one after one:
for (i = 0; i < num.length; i++)
{
  console.log(num[i]);
}

//Traversing one after one but incremented 2 for each element:
for (i = 0; i < num.length; i++)
{
  num[i] = num[i] + 2;
}
console.log(num);

//Traversing and Find Summation of this array elements:
var sum = 0;
for (i = 0; i < num.length; i++)
{
  sum += num[i];
}
console.log(sum);

//Traversing Even Number and Find summation:
var numArr = [4, 8, 6, 3, 7, 19, 40];
var i;
var sumEven = 0;

for (i = 0; i < numArr.length; i++)
{
  if (numArr[i] % 2 === 0)
  {
    sumEven += numArr[i];
    console.log(numArr[i]);
  }
}
console.log(sumEven);

//Traversing Odd Number and Find Summation: 
var sumOdd = 0;
for (i = 0; i < numArr.length; i++)
{
  if (numArr[i] % 2 != 0)
  {
    sumOdd += numArr[i];
    console.log(numArr[i])
  }
}
console.log(sumOdd);