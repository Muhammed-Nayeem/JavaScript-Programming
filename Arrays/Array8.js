//Reversing an Array:
var num = [1, 2, 3, 4, 5, 6, 7, 8];
var i, j;

//Way One:
var arr = [];
for (i = num.length-1, j = 0; i >= 0; i--, j++)
{
  arr[j] = num[i];
}
console.log(arr);


//Way Two:
for (i = 0; i < (num.length / 2); i++)
{
  var temp = num[i];
  num[i] = num[num.length-1-i];
  num[num.length-1-i] = temp;
}
console.log(num);

//Way Three: using built in reverse() function:
var numArr = [1, 2, 3, 4, 5];
console.log(numArr.reverse());
