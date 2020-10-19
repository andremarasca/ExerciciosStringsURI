var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift();
while (line) {
  let jogo = line.split(" ");
  let maisFrequente = jogo.reduce((soma, atual) => (atual === "0" ? soma - 1 : soma + 1), 0);
  if (maisFrequente === -1 || maisFrequente === 1) {
    let diferente = maisFrequente > 0 ? "0" : "1";
    console.log(String.fromCharCode(jogo.indexOf(diferente) + 65));
  } else {
    console.log("*");
  }
  line = lines.shift();
}
