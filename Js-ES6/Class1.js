class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  draw() {
    console.log(`I am a Rectangle`);
    console.log(`My width is ${this.width}`);
    console.log(`My height is ${this.height}`);
  }
}

let rect1 = new Rectangle(20, 10);
rect1.draw();
// console.log(rect1);

let rect2 = new Rectangle(40, 30);
rect2.draw();
// console.log(typeof rect2);
