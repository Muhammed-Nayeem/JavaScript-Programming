//How to use Multidimensional Array:
var arr = [
  [70, 75, 65, 85, 80],
  [90, 85, 75, 80, 70],
  [80, 95, 75, 80, 70]
];
var num = [[],[],[]];
// console.log(arr[0][0]);
// console.log(arr[1][4]);
// console.log(arr[2][2]);

var i, j;
for (i = 0; i < arr.length; i++)
{
  for (j = 0; j < arr[i].length; j++)
  {
    console.log('Elements of ['+ i +']['+ j + '] = ' + arr[i][j]);
  }
}
