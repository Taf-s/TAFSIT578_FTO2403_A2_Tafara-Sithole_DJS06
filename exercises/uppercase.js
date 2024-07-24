const { provinces } = require("../data.js");

// Creates a new array with the uppercase versions of the provinces in the original array //
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());

console.log(uppercaseProvinces);
