// "use strict";

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  print() {
    console.log(`${this.name} ${this.email}`);
  }

  test() {
    console.log(this);
  }

  static create(str) {
    let person = JSON.parse(str);
    return new Person(person.name, person.email);
  }
}
let str = '{"name": "Nayeem", "email": "mnayeem@gmail.com"}';
let p1 = Person.create(str);
console.log(p1);
console.log(p1 instanceof Person);
p1.print();

// let test = p1.test;
// test();

//This keyword property and it's value in ES6:
// function Shape() {
//   this.draw = function () {
//     console.log(this);
//   };
// }
// let s1 = new Shape();
// // s1.draw();
// let anotherDraw = s1.draw;
// anotherDraw();
