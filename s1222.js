var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift();
while (line) {
  line = line.split(" ");
  let N = parseInt(line[0]);
  let L = parseInt(line[1]);
  let C = parseInt(line[2]);
  line = lines.shift();
  let lens = line.split(" ").map((w) => w.length);
  let acumulado = -1;
  let linhas = 0;
  lens.forEach((n) => {
    acumulado = acumulado + n + 1;
    if (acumulado >= C) {
      linhas++;
      if (acumulado > C) {
        acumulado = n;
      } else {
        acumulado = -1;
      }
    }
  });
  if (acumulado > 0) {
    linhas++;
  }
  console.log(Math.ceil(linhas / L));
  line = lines.shift();
}
