const { products } = require("../data.js");

console.log(products.filter((product) => product.product.length <= 5));
