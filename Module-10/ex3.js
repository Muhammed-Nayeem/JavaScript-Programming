//Factory Pattern:
var createRect = function(width, height) {
  return {
    width: width,
    height: height,

    print: function() {
      console.log("I am Rectangle");
      this.printProperties();
    },
    printProperties: function() {
      console.log("Width: "+ this.width);
      console.log("Height: "+ this.height);
    },
  };
};

var rect1 = createRect(40, 60);
var rect2 = createRect(50, 70);

rect1.print();
rect2.print();
