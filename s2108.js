var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let maior = "";
let maiorTam = -1;
let line = lines.shift();
while (line != "0") {
  let tamanhos = line.split(" ").map((w) => {
    if (maiorTam <= w.length) {
      maior = w;
      maiorTam = w.length;
    }
    return w.length;
  });
  console.log(tamanhos.join("-"));
  line = lines.shift();
}

console.log(`\nThe biggest word: ${maior}`);
