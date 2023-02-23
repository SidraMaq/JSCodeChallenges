//Write a function called filterEvens that takes in an array of numbers
//and outputs a new array containing only the even numbers.

//take array of numbers as a parameter number
function filterEvens(numbers) {
  //use filter method to create a new array evenNumbers
  let evenNumbers = numbers.filter(
    //filter method use callback function to check each element of array and return true
    function (num) {
      // callback function checks whether each number is even by using
      //the modulus operator(%) to check if it's divisible by 2 with no remainder
      return num % 2 === 0;
    }
  );
  //return even number array
  return evenNumbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvens(numbers)); //output: [2, 4, 6, 8, 10]

let listNumbers = [11, 12, 23, 42, 55, 26, 37, 47];
console.log(filterEvens(listNumbers)); //output: [12, 42, 26]
