
let params = process.argv.slice(2)

if (params[0].includes(',')) {
  params = params.join('').split(',');
}

console.log("params ", params);

let total = 0;

for (number of params) {
  console.log("current ", number);
  total = total + Number(number);
  console.log("total ", total);
}

console.log("Result: ", total);