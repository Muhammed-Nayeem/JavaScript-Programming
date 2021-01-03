//Function Declaration:
function functionName() {
  console.log('I am a Function!');
}

//sum function:
function add() {
  var a = 10;
  var b = 20;
  console.log(a + b);
}

//sub function:
function sub() {
  var a = 50;
  var b = 20;
  console.log(a - b);
}

//Mul function:
function mul() {
  var a = 20;
  var b = 30;
  console.log(a*b);
}

//Div function:
function div() {
  var a = 10;
  var b = 100;
  console.log(b/a);
}

//Summation function:
function summation() {
  var i;
  var sum = 0;
  for (i = 1; i <= 10; i++)
  {
    sum += i;
  }
  console.log(sum);
}

//Calling Function or Invoking Function:
functionName();
add();
sub();
mul();
div();
summation();