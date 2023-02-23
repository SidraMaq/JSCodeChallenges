//Write a function that takes a number and returns the factorial of that number.
function factorial(num) {
  if (num === 0 || num === 1) {
    //If n is 0 or 1,
    return 1; //the function returns 1 (since 0! and 1! both equal 1)
  } else {
    return num * factorial(num - 1);
  }
}
//If num is any other number, the function returns num times the factorial of num-1. This recursive approach will continue until n reaches 0 or 1, at which point the recursion will end and
//the function will start returning values back up the call stack.

console.log(factorial(2)); // 2
console.log(factorial(4)); //24
console.log(factorial(5)); //120
