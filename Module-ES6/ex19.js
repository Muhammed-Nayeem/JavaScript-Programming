//Private Data with Symbol:
const _width = Symbol();
const _height = Symbol();
// const _draw = Symbol();

class Rectangle {
  constructor(width, height) {
    this[_width] = width;
    this[_height] = height;
  }

  draw() {
    console.log("Drawing.....");
    console.log(`Width is: ${this[_width]}`);
    console.log(`Height is: ${this[_height]}`);
  }
}

let r1 = new Rectangle(10, 15);
r1.draw();
