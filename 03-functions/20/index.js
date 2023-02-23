//Write a function called reverseArray that takes in an array and outputs the reversed version of it.

function reverseArray(arr) {
  const reversedArray = []; //initializes an empty array reversedArray
  for (let i = arr.length - 1; i >= 0; i--) {
    //iterates through the elements of arr in reverse order using a for loop
    reversedArray.push(arr[i]); //pushes each element onto reversedArray
  }
  return reversedArray;
}

//How to use this function
const arr = [1, 2, 3, 4, 5];
const reversedArr = reverseArray(arr);
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
