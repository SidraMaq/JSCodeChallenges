//Write a function called convertToFahrenheit that
//takes in a temperature in Celsius and outputs the temperature in Fahrenheit.

function convertToFahrenheit(celsius) {
  //uses the formula (celsius * 9/5) + 32 to convert it to Fahrenheit.
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

//Note that in the formula, 9/5 is the conversion factor from Celsius to Fahrenheit,
//and 32 is the temperature offset between the two scales.

//Example of how to use the function:
const celsius = 25;
const fahrenheit = convertToFahrenheit(celsius);
console.log(fahrenheit);
