//Hide Private Data with Symbol:
const _radius = Symbol();
const _name = Symbol();
const _draw = Symbol();

class Circle{
  constructor(radius, name) {
    this[_radius] = radius;
    this[_name] = name;
  }

  [_draw]() {
    console.log(`Radius: ${this.radius} Name: ${this.name}`);
  }
}
let c1 = new Circle(5, "CRED");
//c1. nothing can find bcz all data is private:

// console.log(Object.getOwnPropertyNames(c1));
// console.log(Object.getOwnPropertySymbols(c1));
// let key = Object.getOwnPropertySymbols(c1)[0];
// console.log(c1[key]);