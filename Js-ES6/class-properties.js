class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.another = function () {
      return 2 * (width + height);
    };
  }

  Name = `Muhammed Nayeem`;

  printProperties = function () {
    console.log(`My width is ${this.width}`);
    console.log(`My height is ${this.height}`);
    console.log(`Result is: ${this.another()}`);
  };

  draw() {
    console.log(`I am Rectangle`);
  }

  print() {
    console.log(`Class Properties`);
  }
}
let rect1 = new Rectangle(20, 10);
// console.log(rect1);
rect1.printProperties();