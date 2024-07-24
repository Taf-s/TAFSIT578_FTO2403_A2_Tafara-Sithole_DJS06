const { provinces, names } = require("../data.js");

provinces.forEach((province) => {
  console.log(province);
});

names.forEach((name) => {
  console.log(name);
});

const nameWithProvince = names.map((name, index) => {
  const province = provinces[index % provinces.length];
  return `${name} (${province})`;
});

console.log(nameWithProvince);
