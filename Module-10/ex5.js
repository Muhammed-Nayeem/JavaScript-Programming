//New keyword:
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

function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));
  return obj;
}

var rect1 = myNew(Rectangle, 40, 60);
var rect2 = myNew(Rectangle, 30, 70);

rect1.print();
rect2.print();
