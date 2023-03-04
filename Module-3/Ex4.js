//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

var i, j, num = 5;

for (i = 1; i <= num; i++) {
  var numPrint = "";
  for (j = 1; j <= i; j++) {
    numPrint += j + " ";
  }
  console.log(numPrint);
}


for (i = 1; i <= 10; i++) {
  var starPrint = "";
  for (j = 1; j <= i; j++) {
    starPrint += "*" + " ";
  }
  console.log(starPrint)
}
for (i = 10-1; i >= 1; i--) {
  var starPrint = "";
  for (j = 1; j <= i; j++) {
    starPrint += "*" + " ";
  }
  console.log(starPrint)
}