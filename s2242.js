var risada = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");

let vogais = "aeiou";
let risadaVogais = [];
let len = risada.length;
let i;
let j;
let engracada = true;

for (i = 0; i < len; i++) {
  if (vogais.includes(risada[i])) {
    risadaVogais.push(risada[i]);
  }
}

for (i = 0, j = risadaVogais.length - 1; i <= j; i++, j--) {
  if (risadaVogais[i] != risadaVogais[j]) {
    engracada = false;
  }
}

console.log(engracada ? "S" : "N");
