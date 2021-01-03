//Multiplication table using function:
var n = 5;
var m = 10;
var o = 8;

function multiplicationTable(num) {
  var i;
  for (i = 1; i <= 10; i++) {
    console.log(i +' * '+ num +' = '+ (i * num));
  }
  console.log('\n');
}
multiplicationTable(n);
multiplicationTable(m);
multiplicationTable(o);