// How to use Logical AND OR shorthand in Js;
var name = ''
var fullName = ''

/*
if (name.length === 0)
{
  fullName = 'Muhammed Nayeem'
}
else
{
  fullName = name
}
console.log(fullName)
*/

// Using OR shorthand:
fullName = name || 'Muhammed Nayeem'
console.log(fullName)

//Using AND Shorthand:
var isOk = true

isOk && console.log('Everything is okay')
/*
if (isOk)
{
  console.log('Everything is okay')
}
*/