//Write a function that takes an array of objects and a key, and
//returns a new array with the values of the specified key in each object.

function getValuesByKey(objects, key) {
  //objects, which is an array of objects,
  //key, which is a string representing the key whose values we want to extract from each object.
  return objects.map((obj) => obj[key]);
}
/**The function uses the map method to create a new array 
 * with the values of the specified key in each object.
 *  The map method takes a callback function that is executed once for each element 
 * of the array, and returns a new array with the results of each execution.

In this case, the callback function takes an obj parameter representing 
each object in the objects array, and returns the value of the key property of that object. */

//if we have an array of objects representing fruits:
const fruits = [
  { name: "apple", color: "red", price: 0.99 },
  { name: "banana", color: "yellow", price: 0.49 },
  { name: "orange", color: "orange", price: 0.79 },
];
/**And we want to extract the values of the price property of each object,
 * we can call the getValuesByKey function like this: */

const prices = getValuesByKey(fruits, "price");
console.log(prices); // [0.99, 0.49, 0.79]
