var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("I am Rectangle!");
    this.printProperties();
    console.log(this);
  };

  this.printProperties = function () {
    console.log("My Width is: " + this.width);
    console.log("My height is: " + this.height);
  };
};

var rect1 = new Rectangle(10, 8);
rect1.draw();

var rect2 = new Rectangle(15, 20);
rect2.draw();

var rect3 = new Rectangle(12, 18);
rect3.draw();