//Write a function that takes an array of strings
//and returns a new array with all the strings capitalized.

function capitalizedAll(array) {
  // map method to iterate through each element of the array
  return array.map(function (str) {
    //covert them to uppercase
    return str.toUpperCase();
  });
}

const strArray = ["lahore", "karachi", "multan"];
console.log(capitalizedAll(strArray));
