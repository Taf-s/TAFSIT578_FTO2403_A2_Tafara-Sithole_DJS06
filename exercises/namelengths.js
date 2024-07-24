const { names } = require("../data.js");

// Uses `map` to create a new array of lengths of each name //
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);
