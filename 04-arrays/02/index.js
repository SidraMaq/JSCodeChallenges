//Write a function that takes an array of objects and
// returns a new array with only the objects
//that have a certain property.

//"arr" is the array of objects to filter, "property" is the name of the property to check for.
function getObjectWithProperty(arr, property) {
  let objectsWithProperty = [];
  //function iterates over each object in the array
  for (let obj of arr) {
    //if it has the specified property using the hasOwnProperty method
    if (obj.hasOwnProperty(property)) {
      //if it has property, it gets added to the end of the
      //objectsWithProperty array using the push method
      objectsWithProperty.push(obj);
    }
  }
  //returns the objectsWithProperty array with only the objects
  //that have the specified property in it.
  return objectsWithProperty;
}
//Here's an example of how you can use this function:
const arr = [
  { name: "Jhon", age: 32 },
  { name: "Jane", age: 25, city: "New York" },
  { name: "Sidra", age: 32, city: "Lahore" },
  { name: "Sara", age: 35 },
];

const filteredArray = getObjectWithProperty(arr, "city");
console.log(filteredArray);
