//private properties:
var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  var position = {
    x: -100,
    y: -200,
  };

  var printProperties = function () {
    console.log("Width: " + this.width);
    console.log("Height: " + this.height);
  }.bind(this);

  this.print = function () {
    console.log("I am Rectangle!");
    printProperties();
    console.log(this);
  };

  Object.defineProperty(this, "position", {
    get: function() {
      return position;
    },
    set: function(v) {
      position = v;
    },
  });
};

var rect = new Rectangle(30, 70);
rect.print();

console.log(rect.position);

rect.position = {
  x: 300,
  y: 400,
};
console.log(rect.position);
