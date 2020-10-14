var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let ultimaPalavra = (maior, atual) => {
  if (maior.toLowerCase() < atual.toLowerCase()) {
    return atual;
  } else {
    return maior;
  }
};
console.log(lines.reduce(ultimaPalavra, ""));
