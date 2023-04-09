//Constructor Pattern:
var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.print = function () {
    console.log("I am Rectangle!");
    this.printProperties();
    console.log(this);
  };
  this.printProperties = function () {
    console.log("Width: " + this.width);
    console.log("Height: " + this.height);
  };
};

var rect1 = new Rectangle(40, 60);
var rect2 = new Rectangle(30, 70);

rect1.print();
rect2.print();
