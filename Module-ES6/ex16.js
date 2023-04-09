//class:
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log("I am Rectangle!");
    console.log(this);
    this.printProperties();
  }

  printProperties() {
    console.log("Width: " + this.width);
    console.log("Height: " + this.height);
  }
}

let r1 = new Rectangle(30, 15);
r1.draw();

let r2 = new Rectangle(50, 25);
r2.draw();
