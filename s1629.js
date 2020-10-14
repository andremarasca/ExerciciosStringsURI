var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let ehPar = (x) => x % 2 === 0;
let somaImpares = (acc, atual, i) => (!ehPar(i) ? acc + atual : acc);
let somaPares = (acc, atual, i) => (ehPar(i) ? acc + atual : acc);
let stringParaArrayNumerico = (s) => s.split("").map((x) => parseInt(x));
let somaTudo = (acc, atual) => acc + atual;

let line = lines.shift();
while (line) {
  let N = parseInt(line);
  for (let i = 0; i < N; i++) {
    let num = stringParaArrayNumerico(lines.shift());
    let somaI = num.reduce(somaImpares, 0);
    let somaP = num.reduce(somaPares, 0);
    let output = stringParaArrayNumerico(somaI + "" + somaP).reduce(somaTudo, 0);
    console.log(output);
  }
  line = lines.shift();
}
