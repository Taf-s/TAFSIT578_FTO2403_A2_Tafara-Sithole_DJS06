const { products } = require("../data.js");

// Wraps logic in a single `console.log` statement and uses `map` to iterate through the products array and log each product name. //

console.log(products.map((product) => product.product));
