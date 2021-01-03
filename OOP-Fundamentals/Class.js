//What is Class?
//-> It just a Factory to create multiple object without code duplication.



class Rect {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calculateArea() {
    return this.height * this.width;
  }

  calculateRange() {
    return 2 * (this.height + this.width);
  }
}

var rect = new Rect(10, 7);
var rect2 = new Rect(25, 15);
var rect3 = new Rect(40, 12);
