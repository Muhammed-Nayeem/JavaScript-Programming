//What is OOP Concept?
// -> OOP: Object Oriented Programming is a programming paradigm based on the concept of "Objects", which contain data, in the form of fields(often known as attributes and properties) and code, in the form of procedures (often known as methods);

//Procedural programming way Example:
var height = 40;
var width = 50;

function calculateArea(height, width) {
  return height * width;
}

function calculateRange(height, width) {
  return 2 * (height + width);
}

var area = calculateArea(height, width);
var range = calculateRange(height, width);

console.log(area, range);

//Object Oriented programming way Example:
var rect = {
  height: 30,
  width: 40,

  calculateArea: function () {
    return this.height * this.width;
  },

  calculateRange: function () {
    return 2 * (this.height + this.width);
  },
};

var square = {
  height: 10,
  width: 20,

  calculateArea: function () {
    return this.height * this.width;
  },

  calculateRange: function () {
    return 2 * (this.height + this.width);
  },
};

var area = rect.calculateArea();
var range = rect.calculateRange();

var area2 = square.calculateArea();
var range2 = square.calculateRange();

console.log(area, range);
console.log(area2, range2);