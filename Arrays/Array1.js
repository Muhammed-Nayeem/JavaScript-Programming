//How to Declar an Array: By using i) Array Literal and ii) Array Constructor;

var arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
console.log(arr[4]);
arr[5] = 6;
arr[10] = 11; // You can insert new data in any index , there is no doubt;
console.log(arr);
console.log(arr[7]);
arr[2] = 22; //Updating value in index 2 position, new data will be replace the old value;
console.log(arr);
console.log(arr.length);

//Array Declar using Array Constructor;
var arr2 = Array(1, 2, 3);
console.log(arr2);

//Finding Array Length;
var arr3 = [1, 2, 3, 4, 5];
var len = 0;
while (true)
{
  if (arr3[len] == null)
  {
    break;
  }
  else
  {
    len++;
  }
}
console.log(len);