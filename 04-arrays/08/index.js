//Write a function that takes an array of numbers and
//returns a new array with only the even numbers.
function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

//Write a function that takes an array of numbers and
//returns a new array with only the odd numbers.
function oddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Even Numbers: " + evenNumbers(arr));
console.log("odd Numbers: " + oddNumbers(arr));
