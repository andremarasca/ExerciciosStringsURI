var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift().split(" ");
let N = parseInt(line[0]);
let M = parseInt(line[1]);
while (N || M) {
  let imagem = lines.splice(0, N);
  line = lines.shift().split(" ");
  A = parseInt(line[0]) / N;
  B = parseInt(line[1]) / M;
  let novaImagem = [];
  for (let l = 0; l < N; l++) {
    let outLine = "";
    line = imagem[l];
    for (let c = 0; c < line.length; c++) {
      outLine += line[c].repeat(B);
    }
    for (let r = 0; r < A; r++) {
      novaImagem.push(outLine);
    }
  }
  console.log(novaImagem.join("\n") + "\n");
  line = lines.shift().split(" ");
  N = parseInt(line[0]);
  M = parseInt(line[1]);
}
