var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let numeros = lines.shift().split("");
for (let i = 0; i < 3; i++) {
  let line = lines.shift().split("");
  for (let j = 0; j < line.length; j++) {
    numeros[j] += line[j];
  }
}
numeros = numeros.map((x) => parseInt(x));
let F = numeros.shift();
let L = numeros.pop();
let mensagem = numeros.map((M) => String.fromCharCode((F * M + L) % 257));
console.log(mensagem.join(""));
