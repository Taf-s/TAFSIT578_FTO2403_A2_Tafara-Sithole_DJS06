const { provinces } = require("../data.js");

// Create a new array with the uppercase versions of the provinces
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());

console.log(uppercaseProvinces);
