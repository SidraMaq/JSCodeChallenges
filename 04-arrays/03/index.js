//Write a function that takes an array of numbers and
//returns a new array with the numbers sorted in descending order.

function sortDescending(arr) {
  return arr.sort(function (a, b) {
    return b - a;
  });
}
//Here's an example of how you can use this function:

const arr = [3, 5, 4, 6, 8, 9, 7, 2, 1];

const sortedarr = sortDescending(arr);
console.log("Sorting in descending order: " + sortedarr);
//note:The sort() method takes a comparison function as an optional argument,
// which is used to determine the order of the elements.In this case,
//the comparison function sorts the array in descending order by subtracting b from a.

//2. Write a function that takes an array of numbers and
//returns a new array with all the numbers sorted in ascending order.
function sortAscending(arr) {
  return arr.sort(function (a, b) {
    //function sorts the array in ascending order by subtracting a from b.
    return a - b;
  });
}
const newArr = [3, 5, 4, 6, 8, 9, 7, 2, 1];
console.log("sorting in ascending order: " + sortAscending(newArr));
