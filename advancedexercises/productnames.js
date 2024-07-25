const { products } = require("../data.js");

// Used the reduce method to concatenate all product names into a single string.//
console.log(
  products.reduce((acc, product) => {
    return acc + product.product + " ";
  }, "")
);
