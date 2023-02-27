//Write a function that takes an array of numbers and
// returns the average of all the numbers.

function arrAverage(arr) {
  //function takes one parameter, arr, which is the array of numbers to average.
  let sum = 0; // initializes a variable sum to 0
  // iterates over each number in the array using a for loop
  for (let i = 0; i < arr.length; i++) {
    //adds the current number to the sum variable using the += operator
    sum += arr[i];
  }
  //After the loop completes, the function calculates the average
  //by dividing the sum by the length of the array
  let avg = sum / arr.length;
  //function returns the avg variable,
  //which contains the average of all the numbers in the array.
  return avg;
}

const arr = [1, 2, 3, 4, 5];
console.log("Average of an array is: " + arrAverage(arr));
