var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift();
while (line) {
  let N = parseInt(line.split(" ")[0]);
  let nomesUnicos = new Set();
  let repeticoes = 0;
  for (let i = 0; i < N; i++) {
    let nome = lines
      .shift()
      .split(" ")
      .filter((x) => x != false)
      .map((w) => w[0])
      .join("");
    if (nomesUnicos.has(nome)) {
      repeticoes++;
    } else {
      nomesUnicos.add(nome);
    }
  }
  console.log(repeticoes);
  line = lines.shift();
}
