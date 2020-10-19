var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let soma = 0;
let qtd = 0;
let line = lines.shift();
while (line) {
  soma += parseInt(lines.shift());
  qtd++;
  line = lines.shift();
}
console.log((soma / qtd).toFixed(1));
