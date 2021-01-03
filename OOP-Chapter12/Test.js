//Object Literal with method:
var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("I am Rectangle!");
    console.log("My Width is: " + this.width);
    console.log("My Height is: " + this.height);
  },
};
rect.draw();
rect.height = 100;
rect.draw();

//This Keyword Uses:
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

function myFunc() {
  console.log(this);
  rect.printProperties();
}
// myFunc();
new myFunc();

var another = {
  width: 40,
  height: 50,

  print: rect.printProperties,
};
console.log(another.print);
another.print();

//Creating Class using factory pattern:
var createRect = function (width, height) {
  return {
    width: width,
    height: height,

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
};
var rect2 = createRect(30, 35);
rect2.draw();
var rect3 = createRect(45, 55);
rect3.draw();

//Creating Class using Constructor Patter:
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
    console.log("My Height is: " + this.height);
  };
};

var rect4 = new Rectangle(15, 25);
rect4.draw();
var rect5 = new Rectangle(34, 43);
rect5.draw();

//New keyword how to work Implementation:
function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));

  return obj;
}

var rect6 = myNew(Rectangle, 20, 24);
rect6.draw();

//Data Hiding :
var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  var position = {
    x: 100,
    y: -45,
  };

  var printProperties = function () {
    console.log("My Width is: " + this.width);
    console.log("My Height is: " + this.height);
  }.bind(this);

  //way one: for getting data from outside
  // this.getPosition = function () {
  //   return position;
  // };

  this.draw = function () {
    console.log("I am Rectangle!");
    printProperties();
    console.log(
      "Position X : " + position.x + " " + "Position Y : " + position.y
    );
  };

  //way two: for getting data from outside
  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
};
var rect = new Rectangle(10, 20);
rect.draw();
// console.log(rect.getPosition());
console.log(rect.position);
rect.position = {
  x: 400,
  y: 200,
};
console.log(rect.position);
