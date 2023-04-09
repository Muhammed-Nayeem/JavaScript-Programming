//bind, call, apply:
function test(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

test.call({a: 10, b: 20}, 30, 40);

test.apply({a: 10, b: 20}, [30, 40]);

var sample = test.bind({a: 30, b: 40});
sample(10, 20);
