const { names } = require("../data.js");

const containsS = names.map((name) =>
  name.split("").some((char) => char === "S")
);

console.log(containsS);
