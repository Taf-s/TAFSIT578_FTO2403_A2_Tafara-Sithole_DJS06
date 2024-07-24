const { provinces, names } = require("../data.js");

// Uses `reduce` to transform the names array into an object mapping names to their respective provinces.//

const nameToProvince = names.reduce((obj, name, index) => {
  const province = provinces[index % provinces.length];
  obj[name] = province;
  return obj;
}, {});
console.log(nameToProvince);
