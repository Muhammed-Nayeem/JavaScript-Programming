function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

// myFunc();
myFunc.call({a: 20, b: 30}, 10, 20);
myFunc.call({a: 50, b: 60}, 40, 40);
myFunc.apply({a: 400, b: 250}, [20, 20]);

var testBind = myFunc.bind({a: 40, b: 60});
testBind(50, 60);