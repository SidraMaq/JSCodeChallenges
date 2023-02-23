//Write a function called convertToCelsius
//that takes in a temperature in Fahrenheit and outputs the temperature in Celsius.

//Note that in the formula, 5/9 is the conversion factor from Fahrenheit to Celsius,
//and - 32 is the temperature offset between the two scales.

function convertToCelsius(fahrenheit) {
  // uses the formula (fahrenheit - 32) * 5/9 to convert it to Celsius
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

//Example of how to use the function:
const fahrenheit = 67;
const celsius = convertToCelsius(fahrenheit);
console.log(celsius);
