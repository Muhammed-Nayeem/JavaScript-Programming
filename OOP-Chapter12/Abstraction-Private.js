var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  var position = {
    x: 45,
    y: -100,
  };

  //Private Data getting from outside by this code:
  // this.getPosition = function () {
  //   return position;
  // };

  var printProperties = function () {
    console.log("My width is : " + this.width);
    console.log("My height is : " + this.height);
  }.bind(this);

  this.draw = function () {
    console.log("I am Rectangle!");
    printProperties();
    console.log(
      "Position X : " + position.x + " " + "Position Y : " + position.y
    );
  };

  //Private Data getting from outside by this code and setting data also:
  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
};

var rect = new Rectangle(40, 35);
rect.draw();


//Getting private data from outside:
// console.log(rect.getPosition());
console.log(rect.position);

//Setting private data from outside:
rect.position = {
  x: 400,
  y: 600,
};
console.log(rect.position);
