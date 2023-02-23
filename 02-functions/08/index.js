//Write a function called capitalize that takes in a string
//and outputs the same string with the first letter capitalized.

//string as a parameter called str
function capitalize(str) {
  //extracts the first character of the string using the charAt method and
  //stores it in a variable called firstChar
  let firstChar = str.charAt(0);
  //capitalizes the first character using the toUpperCase method
  //and concatenate with other string using the slice method,
  let capitalize = firstChar.toUpperCase() + str.slice(1);
  //return capitalize
  return capitalize;
}

console.log(capitalize("hello")); //Hello
console.log(capitalize("developer")); //Developer
