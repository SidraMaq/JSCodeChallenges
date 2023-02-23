//Write a function called generateRandomNumber that
//takes in a range of numbers and outputs a random number within that range.

function generateRandomNumber(min, max) {
  //takes numbers in a range of min and max
  //uses the Math.random() function to generate a random decimal number between 0 and 1.
  //multiplies this number by the range of numbers,
  //and rounds down to the nearest integer using Math.floor().

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

//Note that the formula used in this function is (Math.random() * (max - min + 1)) + min,
// which generates a random number between min and max(inclusive).

const min = 1;
const max = 100;

const randomNumber = generateRandomNumber(min, max);
console.log(randomNumber);
