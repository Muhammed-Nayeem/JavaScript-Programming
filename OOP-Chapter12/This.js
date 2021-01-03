var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("I am Rectangle!");
    this.printProperties();
    console.log(this);
  },

  printProperties: function () {
    console.log("My Width is: " + this.width);
    console.log("My Height is: " + this.height);
  },
};

rect.draw();

rect.height = 100; 

rect.draw();

function myFunc() {
  console.log(this);
  rect.printProperties();
}
// myFunc();
new myFunc();

var another = {
  width: 40,
  height: 60,

  print: rect.printProperties,
};
console.log(another.print);
another.print();
 