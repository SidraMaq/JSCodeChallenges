// Write a function that takes an array of numbers
//and returns the sum of all the numbers.

function sum(arr) {
  //function takes one parameter, arr, which is the array of numbers to sum

  let sum = 0; //initializes a variable sum to 0,
  //then iterates over each number in the array using a for loop
  for (let i = 0; i < arr.length; i++) {
    //adds the current number to the sum variable using the += operator
    sum += arr[i];
  }
  //returns the sum variable, which contains the total sum of all the numbers in the array.
  return sum;
}

const myArr = [2, 4, 5, 6];
console.log("Sum of arr: " + sum(myArr));
