//Inheritance:
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log("Drawing....");
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  //method overriding:
  draw() {
    console.log(`Drawing Color is: ${this.color}`);
  }

  print() {
    console.log(`Width is: ${this.width}`);
    console.log(`Height is: ${this.height}`);
    this.draw();
  }
}

let r1 = new Rectangle("Green", 10, 15);
r1.print();
