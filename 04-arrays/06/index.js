//Write a function that takes an array of strings and
//returns the longest string in the array.
function findLongestString(arr) {
  let longestString = "";
  //using a for loop and keeps track of the longest string found
  //so far using the longestString variable
  for (let i = 0; i < arr.length; i++) {
    //If the current string is longer than the current longest string
    if (arr[i].length > longestString.length) {
      //the longestString variable is updated with the current string
      longestString = arr[i];
    }
  }
  return longestString;
}

//Write a function that takes an array of strings and
//returns the shortest string in the array.
function findShortestString(arr) {
  let shortestStrings = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortestStrings.length) {
      shortestStrings = arr[i];
    }
  }
  return shortestStrings;
}

const arr = ["apple", "banana", "pear", "grapefruit"];
const longestString = findLongestString(arr);
const shortestStrings = findShortestString(arr);

console.log("longest String: " + longestString);
console.log("Shortest String: " + shortestStrings);
