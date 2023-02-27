//Write a function that takes an array of numbers and
//returns the largest number in the array.
function findLargestNum(arr) {
  let largestNumber = arr[0];
  //function iterates over each number in the array using a for loop and
  //keeps track of the largest number found so far using the largestNumber variable.
  for (let i = 1; i < arr.length; i++) {
    //If the current number is greater than the current largest number, the largestNumber
    if (arr[i] > largestNumber) {
      //variable is updated with the current number
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

//Write a function that takes an array of numbers and
//returns the smallest number in the array.
function findSmallestNum(arr) {
  //The function initializes the smallestNumber variable to the first number in the array
  let smallestNumber = [0];
  //then iterates over the rest of the numbers in the array.
  for (let i = 1; i < arr.length; i++) {
    //If the current number is smaller than the current smallest number
    if (arr[i] < smallestNumber) {
      //smallestNumber variable is updated with the current number.
      smallestNumber = arr[i];
    }
  }
  // returns the smallestNumber variable, which contains the smallest number
  return smallestNumber;
}

//how to use these functions
const arr = [5, 3, 8, 2, 1];

console.log("largest number in an array: " + findLargestNum(arr));
console.log("smallest number in an array: " + findSmallestNum(arr));
