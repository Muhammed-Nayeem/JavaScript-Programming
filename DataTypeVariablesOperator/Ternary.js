var n = 51;
var str = '';

if (n % 2 === 0)
{
  str = 'Even';
}
else
{
  str = 'Odd';
}
console.log(str);


var num = 50, m = 30, n = 20, max, min, result;

result = (num % 2 === 0) ? 'Even' : 'Odd';
console.log(result);

max = (m > n) ? m : n;
min = (m < n) ? m : n;

console.log(max);
console.log(min);