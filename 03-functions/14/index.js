//Write a function that takes an array of numbers and
//returns the average of all the numbers in the array.

function calculateAverage(numbers) {
  //1. check if the input array is empty, and if so, returns 0
  if (numbers.length === 0) {
    return 0;
  }
  //uses the reduce method to sum up all the numbers in the array
  const sum = numbers.reduce((total, num) => total + num);
  //then divides the sum by the length of the array to calculate the average.
  const avg = sum / numbers.length;
  return avg;
}

let newArray = [2, 4, 6, 7, 9, 23];
console.log(calculateAverage(newArray));
