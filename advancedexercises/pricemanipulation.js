const { products } = require("../data.js");

// Used the filter method to filter through the products array and return products with prices.
//Then used the map method to convert the prices to numbers. Then used the reduce method to calculate the total price.//

console.log(
  products
    .filter((product) => product.price)
    .map((product) => Number(product.price))
    .reduce((acc, price) => acc + price, 0)
);
