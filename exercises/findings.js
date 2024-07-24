const { names } = require("../data.js");

// Uses `map` to create a new array of booleans indicating if each name contains the letter 'S' //

const containsS = names.map((name) =>
  name.split("").some((char) => char === "S")
);

console.log(containsS);
