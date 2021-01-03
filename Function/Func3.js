//get maximum number and minimum number using function:
var arr1 = [50, 10, 30, 20, 5, 60];
var arr2 = [40, 60, 80, 70, 90, 10];
var arr3 = [100, 10, 50, 80, 8, 110];

//create a function for minimum number:
function minNumber(arr) {
  var i;
  var min = arr[0];
  for (i = 0; i < arr.length; i++) 
  {
    if (arr[i] < min)
    {
      min = arr[i];
    }
  }
  console.log("Minimum Number: " + min);
}

//create a function fo maximum number:
function maxNumber(arr) {
  var i;
  var max = arr[0];
  for (i = 0; i < arr.length; i++) 
  {
    if (arr[i] > max) 
    {
      max = arr[i];
    }
  }
  console.log("Maximum Number: " + max);
}

//Invoking minNumber Function:
minNumber(arr1);
minNumber(arr2);
minNumber(arr3);

//Invoking maxNumber Function:
maxNumber(arr1);
maxNumber(arr2);
maxNumber(arr3);