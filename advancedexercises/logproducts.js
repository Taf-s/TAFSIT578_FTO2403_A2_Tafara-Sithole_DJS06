const { products } = require("../data.js");

// Wraps logic in a single `console.log` statement and uses `map` to log each product name. //
console.log(products.map((product) => product.product));
