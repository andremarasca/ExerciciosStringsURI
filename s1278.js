var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let output = [];
let N = parseInt(lines.shift());
while (N) {
  let maior = 0;
  let frases = [];
  for (let l = 0; l < N; l++) {
    let line = lines.shift();
    line = line
      .split(" ")
      .filter((e) => e != false)
      .join(" ");
    if (maior < line.length) maior = line.length;
    frases.push(line);
  }
  for (let l = 0; l < N; l++) {
    frases[l] = " ".repeat(maior - frases[l].length) + frases[l];
  }
  output.push(frases.join("\n"));
  N = parseInt(lines.shift());
}
console.log(output.join("\n\n"));
