// Searching data from an array: 
var numArr = [10, 4, 7, 15, 30, 9, 24, 28, 35, 26, 40, 32, 38, 50];
var find = 30;
var i;
// var count = 0;
var isFound = false;

for (i = 0; i < numArr.length; i++)
{
  if (find === numArr[i])
  {
    console.log('Data is found at index ' + i);
    // count++;
    isFound = true;
    break;
  }
}
// if (count != 1)
// {
//   console.log('Data is not found!');
// }
if (!isFound)
{
  console.log('Data is not found');
}