for (; ;)
{
  var rand = (Math.floor(Math.random()*10+1));
  if (rand === 10)
  {
    console.log('Winner Winner');
    break;
  }
  else
  {
    console.log(rand);
  }
}