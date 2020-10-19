var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let contagem = new Array(10001);
let line = lines.shift();
while (line != "0 0") {
  contagem.fill(0);
  let [N, M] = line.split(" ").map((x) => parseInt(x));
  lines
    .shift()
    .split(" ")
    .forEach((x) => contagem[parseInt(x)]++);
  let d = 0;
  for (i = 0; i <= 10000; i++) {
    if (contagem[i] > 1) d++;
  }
  console.log(d);
  line = lines.shift();
}
