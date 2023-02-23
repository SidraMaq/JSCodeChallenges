//Write a function called reverseString that takes in a string
//and outputs the reversed version of it.

function reverseString(str) {
  return str.split("").reverse().join("");
}
//This function takes in a single parameter str, and
//returns the reversed version of it by splitting it into an array of individual characters using the split() method, reversing the order of the characters in the array using the reverse() method,
// and joining them back together into a string using the join() method.
console.log(reverseString("My name is sidra maqbool"));
