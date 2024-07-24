const { products } = require("../data.js");

console.log(
  products.reduce((acc, product) => {
    return acc + product.product + " ";
  }, "")
);
