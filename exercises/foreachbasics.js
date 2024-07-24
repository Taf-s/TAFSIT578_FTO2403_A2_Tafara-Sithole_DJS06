const { provinces, names } = require("../data.js");

provinces.forEach((province) => {
  console.log(province);
});

names.forEach((name) => {
  console.log(name);
});

const nameWithProvince = [];

names.forEach((name, index) => {
  const province = provinces[index % provinces.length];
  nameWithProvince.push(`${name} (${province})`);
});

console.log(nameWithProvince);
