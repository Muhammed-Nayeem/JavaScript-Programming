//Multi Level Inheritance:
// function Person(name) {
//   this.name = name;
// }
// var p1 = new Person('Nayeem');
// console.log(p1);


//Object Property Descriptor:

// var person = {
//   name: 'Muhammed Nayeem',
// };

// for (var i in person) {
//   console.log(i);
// }

// console.log(Object.keys(person));

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name');
// console.log(descriptor);

// var baseObj = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString');
// console.log(descriptor);


// Object.defineProperty(person, 'name', {
//   enumerable: false,
//   configurable: false,
//   writable: false,
// });



//Constructor Prototype:
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.PI = 3.1416;

// var p1 = new Person('Nayeem');
// var p2 = new Person('Shakib');

// console.log(Object.getPrototypeOf(p1));
// console.log(Person.prototype);

// console.log(p1);
// console.log(p2);


//Instance vs Prototype member:
// function Square(width) {
//   this.width = width;

//   //this.draw = function () {
//     //console.log('Draw');
//    //};

//   this.getWidth = function () {
//     console.log('My width is: '+ this.width);
//     // this.draw();
//   };
// }

// Square.prototype = {
//   draw: function () {
//     this.getWidth();
//     console.log('Draw');
//   },
//   toString: function () {
//     return 'My width is: '+ this.width;
//   },
// };

// var sqr1 = new Square(10);
// var sqr2 = new Square(5);

// console.log(Object.keys(sqr1));

// for (var i in sqr1) {
//   console.log(i);
// }
