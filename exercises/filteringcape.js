const { provinces } = require("../data.js");

const filteringCape = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filteringCape.length);
