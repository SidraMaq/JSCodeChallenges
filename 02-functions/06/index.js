//Write a function called countChars that takes in a string and a character
//and outputs the number of times that character appears in the string.

//takes two parameters: str (string we want to count characters in)
//char (which is character count)
function countChars(str, char) {
  //iterates over each character in the string using a for loop
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    //if it's equal to the target character char.
    if (str[i] === char) {
      //it increments a count variable
      count++;
    }
  }
  //function returns the total count of the target character in the string
  return count;
}

console.log(countChars("hello", "l")); // Outputs: 2
console.log(countChars("world", "o")); // Outputs: 1
console.log(countChars("hello", "x")); // Outputs: 0
