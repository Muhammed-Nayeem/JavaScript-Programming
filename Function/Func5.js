//Function Keyword: Arguments , by using this keyword you can create function without any parameters passing;

function test(a, b, c) {
  // console.log(JSON.stringify(arguments));
  console.log(arguments);
  // console.log(typeof a);
}
test();

function number(a, b, c) {
  // console.log(arguments);
  var i;
  for (i = 0; i < arguments.length; i++)
  {
    console.log(arguments[i]);
  }
}
number(10, 20, 30);

function sum() {
  var sum = 0;
  var i;
  for (i = 0; i < arguments.length; i++)
  {
    sum += arguments[i];
  }
  console.log(sum);
}
sum(1, 2, 3);
sum(4, 5, 6, 7);
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);