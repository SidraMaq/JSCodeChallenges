//Write a function called calculateArea
//that takes in the length and width of a rectangle and outputs its area.

//two parameters: length and width which are the dimensions of the rectangle
function calculateArea(length, width) {
  //declare a variable area and multiplies the length by the width
  //to calculate the area of the rectangle
  let area = length * width;
  //return the area as an output
  return area;
}

console.log(calculateArea(5, 5));
console.log(calculateArea(6, 10));
