//Write a function called calculateDiscount that takes in a price
//and a discount percentage and outputs the discounted price.

//two parameters: price and discountPercentage
function calculateDiscount(price, discountPercentage) {
  //calculates the discount amount by multiplying the price by the discount percentage
  const discountedAmount = (discountPercentage / 100) * price;
  //then subtracts that amount from the original price to get the discounted price
  const discountedPrice = price - discountedAmount;
  //discounted price is returned.
  return discountedPrice;
}

console.log(calculateDiscount(4500, 20)); //output: 3500
console.log(calculateDiscount(3000, 10)); //output: 2700
