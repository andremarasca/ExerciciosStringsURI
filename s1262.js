var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift();
while (line) {
  let P = parseInt(lines.shift());
  let ant;
  let acc = 0;
  let total = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] == "R") {
      acc++;
    } else {
      total++; // Todo W contabiliza 1
      if (ant == "R") {
        total += Math.ceil(acc / P); // tratar acc
        acc = 0;
      }
    }
    ant = line[i];
  }
  total += Math.ceil(acc / P); // Caso termine com R acc tem valor
  console.log(total);
  line = lines.shift();
}
