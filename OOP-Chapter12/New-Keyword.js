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

// This code is made the new keyword works:
function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));

  return obj;
}
var rect2 = myNew(Rectangle, 45, 25);
rect2.draw();
