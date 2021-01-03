//Find Day Project by using if else;
var date = new Date()
var day = date.getDay()

// console.log(day)

// 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday;

if (day == 0)
{
  console.log('It is Sunday')
}
else if (day == 1)
{
  console.log('It is Monday')
}
else if(day == 2)
{
  console.log('It is Tuesday')
}
else if(day == 3)
{
  console.log('It is Wednesday')
}
else if (day == 4)
{
  console.log('It is Thursday')
}
else if (day == 5)
{
  console.log('It is Friday')
}
else if (day == 6)
{
  console.log('It is Saturday')
}