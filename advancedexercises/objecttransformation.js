const { products } = require("../data.js");

// The reduce method is called on the products array an initial accumulator
// Then each object from the array is destructured to extract the product and price
// Lastly a new object is created with the name and cost properties and is pushed to the accumulator

console.log(
  products.reduce((acc, { product, price }) => {
    acc.push({ name: product, cost: price });
    return acc;
  }, [])
);
