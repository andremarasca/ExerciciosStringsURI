var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let imprimirIguais = (line, j) => console.log(`${line[0]} x ${j} = ${line[0] * j}`);
let imprimirDiferentes = (line, j) =>
  console.log(`${line[0]} x ${j} = ${line[0] * j} && ${line[1]} x ${j} = ${line[1] * j}`);

let N = lines.shift();
for (let i = 0; i < N; i++) {
  let line = lines.shift().split("x");
  line = line.map((x) => parseInt(x));
  let imprimir = line[0] == line[1] ? imprimirIguais : imprimirDiferentes;
  for (let j = 5; j <= 10; j++) {
    imprimir(line, j);
  }
}
