//Write a function that takes an array of strings and
//returns a new array with only the unique strings.

function getUniqueStrings(arr) {
  let uniqueStrings = [];
  //This function works by iterating over each string in the input array
  for (let string of arr) {
    //checking if it already exists in the uniqueStrings array using the includes method.
    if (!uniqueStrings.includes(string)) {
      // it gets added to the end of the array using the push method
      uniqueStrings.push(string);
    }
  }
  //returns the uniqueStrings array with only the unique strings in it
  return uniqueStrings;
}
//how to use this function
//create an array of strings
const arr = ["apple", "banana", "orange", "banana", "pear", "apple"];
//call the getUniqueStrings function and pass the arr array as an argument
console.log(getUniqueStrings(arr));
