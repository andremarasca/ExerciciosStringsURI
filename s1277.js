var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let T = parseInt(lines.shift());
for (let t = 0; t < T; t++) {
  let N = parseInt(lines.shift());
  let nomes = lines.shift().split(" ");
  let freq = lines.shift().split(" ");
  let reprovados = [];
  for (let i = 0; i < N; i++) {
    let A = 0;
    let P = 0;
    for (let j = 0; j < freq[i].length; j++) {
      if (freq[i][j] == "A") {
        A++;
      } else if (freq[i][j] == "P") {
        P++;
      }
    }
    let frequencia = P / (A + P);
    if (frequencia < 0.75) {
      reprovados.push(nomes[i]);
    }
  }
  console.log(reprovados.join(" "));
}
