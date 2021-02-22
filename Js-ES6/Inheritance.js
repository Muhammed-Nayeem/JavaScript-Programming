//Inheritance in ES6:
class Shape {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log(`Drawing....`);
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  calculate() {
    return this.width * this.height;
  }
  //Method Overriding:
  draw() {
    console.log(`Drawing Color is: ${this.color}`);
  }
}
let r1 = new Rectangle("Green", 5, 6);
console.log(r1);
console.log(r1.calculate());
r1.draw();
