//Create a common codes Function:
function extend(parent, child) {
  child.prototype = Object.create(parent.prototype); 
  child.prototype.constructor = child;
}


//Creating Constructor Function for Common methods:
function Shape(color) {
  this.color = color;
}
Shape.prototype.common = function () {
  console.log("I am common methods");
};

function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}
extend(Shape, Square);
// Square.prototype = Object.create(Shape.prototype); //Doing Inheritance for Square by this line;
// Square.prototype.constructor = Square;

//Method Overridden:
Square.prototype.common = function() {
  console.log("I am methods and I am overridden from Square.");
};

Square.prototype.draw = function () {
  console.log("Drawing");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extend(Shape, Circle);
// Circle.prototype = Object.create(Shape.prototype); //Doing Inheritance for Circle by this line;
// Circle.prototype.constructor = Circle;

//Method Overridden:
Circle.prototype.common = function () {
  console.log("I am a methods and I am overridden from Circle.");
};

var shape = new Shape("black");
var sqr = new Square(45, "green");
var circle = new Circle(50, "red");

//Printing the common methods:
var arr = [shape, sqr, circle];
for (var i of arr) {
  i.common();
}
// shape -> Shape -> Object
// sqr -> Square -> Object

// sqr -> Square -> Shape -> Object
