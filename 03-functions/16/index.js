//Write a function called findMin
//that takes in an array of numbers and outputs the smallest number in the array.
function findMin(arr) {
  let minVal = arr[0]; // initialize the minimum value to the first element of the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i]; //updating the minimum value if a smaller number is found
    }
  }
  return minVal; //return minimum value
}

const numbers = [3, 7, 2, 8, 1, 9];
const minNum = findMin(numbers);
console.log(minNum);
