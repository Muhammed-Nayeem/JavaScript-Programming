/**
 *? Write a function that will take a rectangle's length and width as a parameter and then return the area of the rectangle!
 */

const rectangleLength = 13;
const rectangleWidth = 8;

function areaOfRectangle(length, width) {
  const area = length * width;
  return area;
}

console.log(`Area of Rectangle : ${areaOfRectangle(rectangleLength, rectangleWidth)} square centimeters.`);
