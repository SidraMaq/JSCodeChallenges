//Write a function called findMax
//that takes in an array of numbers and
//outputs the largest number in the array.

function findMax(arr) {
  let maxVal = arr[0]; // initialize the maximum value to the first element of the array
  //it iterates through the rest of the elements in the array,
  for (let i = 0; i < arr.length; i++) {
    //if a larger number is found
    if (arr[i] > maxVal) {
      //updating the maximum value
      maxVal = arr[i];
    }
  }
  return maxVal; //returns the maximum value.
}

const numbers = [3, 7, 2, 8, 1, 9];
const maxNum = findMax(numbers);
console.log(maxNum);
