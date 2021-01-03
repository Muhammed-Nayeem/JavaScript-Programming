//How to find out a string length:

var length = 0;
var str = 'Muhammed Nayeem';

while (true) {
  if (str.charAt(length) == '') {
    break;
  } else {
    length++;
  }
}
console.log(length);

var len = 0;
var st = 'Some String';
var i;

for (; ;) {
  if (st.charAt(len) == '') {
    break;
  } else {
    len++;
  }
}
console.log(len);

var name = 'Muhammed Nayeem';
console.log(name.length);