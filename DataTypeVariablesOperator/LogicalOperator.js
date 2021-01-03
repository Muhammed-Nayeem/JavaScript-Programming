var a = 20;
var b = 10;
var c = 40;
var d = 30;

//Logical AND Operation: Both of the condition is need to be true;
if ((a > b) && (c > d))
{
  console.log('A is greater than B and C is greater than D');
}
else
{
  console.log('Both of the condition was not true yet!');
}

//Logical OR Operator: At list one condition is need to be true;
if ((b < a) || (d < c))
{
  console.log('B is less than A or D is less than C');
}
else
{
  console.log('No condition was true');
}

//Logical NOT : It will convert the value, if true than return false and if false than return true;
var x = !!(a > b);
console.log(x);