//searching from array:
var num = [1, 3, 2, 6, 4, 7, 5, 8, 10, 9];
var value = 10;
var isFound = false;

for (var i = 0; i < num.length; i++) {
  if (value === num[i]) {
    console.log("Value is found at index : "+ i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log("Data is not found!");
}
