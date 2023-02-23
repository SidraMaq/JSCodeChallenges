//Write a function that takes a number and returns true if the number is a prime number.
//Prime Number: it is a number that is only divisible by 1 and itself.
function isPrime(num) {
  // first checks if the number is less than or equal to 1,
  //which are not prime numbers
  if (num <= 1) {
    return false; // 1 and numbers less than 1 are not prime
  }
  //then iterates through each number between 2 and the number itself
  for (let i = 2; i < num; i++) {
    // checking if it is divisible by each number
    if (num % i === 0) {
      return false; //if the number is divisible by any number between 2 and itself, it's not prime
    }
  }

  return true; // if it hasn't been determined as not prime by now, it must be prime
}

console.log(isPrime(7));
console.log(isPrime(6));
