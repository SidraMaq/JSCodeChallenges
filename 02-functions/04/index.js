//Write a function called isEven that takes in a number and outputs true if it's even and false otherwise.
function isEven(num) {
  return num % 2 === 0;
}
//This function takes in a single parameter num,
// and checks if it's even by using the modulus operator
//to check if the remainder when dividing by 2 is equal to 0.
//If it is, the function returns true, otherwise it returns false.

console.log(isEven(5));
console.log(isEven(4));
