const { products } = require("../data.js");

console.log(
  ((products) => {
    const validProducts = products
      // Determines if the product has a valid price by filtering through the prices array and removing invalid prices.//
      .filter(
        ({ price }) =>
          !isNaN(price) && price !== "" && String(price).trim() !== ""
      )
      // Uses the map method to iterate through the products array and convert the prices to numbers.//
      .map(({ product, price }) => ({ product, price: Number(price) }));

    // Calculate the highest price for the valid products using the reduce method.//
    const highest = validProducts.reduce(
      (prev, current) => (prev.price > current.price ? prev : current),
      validProducts[0]
    );
    // Calculate the lowest price for the valid products using the reduce method.//
    const lowest = validProducts.reduce(
      (prev, current) => (prev.price < current.price ? prev : current),
      validProducts[0]
    );
    // Returns a templeate literal with the product with the highest and lowest price.//
    return `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
  })(products)
);
