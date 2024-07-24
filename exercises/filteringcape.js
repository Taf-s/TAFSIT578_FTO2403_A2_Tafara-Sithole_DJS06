const { provinces } = require("../data.js");

// Use `filter` to remove provinces containing "Cape" //

const filteringCape = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filteringCape.length);
