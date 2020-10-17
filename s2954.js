const { parse } = require("path");

var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let soma = 0;
  let maior = 0;
  lines
    .shift()
    .toUpperCase()
    .split("")
    .map((x) => ("A" <= x && x <= "Z" ? x : "."))
    .join("")
    .split(".")
    .filter((x) => x != false)
    .forEach((w) => {
      soma += w.length;
      if (w === "JOGO" || w === "PERDI") {
        if (maior < soma) {
          maior = soma;
        }
        soma = 0;
      }
    });
  console.log(maior);
}
