var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift();
while (line) {
  let N = parseInt(line);
  let qtd = 0;
  for (let i = 0; i < N; i++) {
    let especie = lines.shift();
    let raca = lines.shift();
    let nome = lines.shift();
    lines.shift();
    if (especie === "cachorro") {
      nome = nome.split(" ");
      if (nome.length > 1) {
        for (let n = 0; n < nome.length; n++) {
          if (nome[n][0] === raca[0]) {
            qtd++;
            break;
          }
        }
      }
    }
  }
  console.log(qtd);
  line = lines.shift();
}
