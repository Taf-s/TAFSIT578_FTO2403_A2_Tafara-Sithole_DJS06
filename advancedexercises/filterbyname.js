const { products } = require("../data.js");

// Used the filter method to filter through the products array and return products with names longer than 5 characters.//

console.log(products.filter((product) => product.product.length <= 5));
