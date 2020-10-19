var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let comecaEm = (x) => (w) => w[0].toUpperCase() === x.toUpperCase();
let line = lines.shift();
while (line !== "*") {
  let comecaEmX = comecaEm(line[0]);
  console.log(line.split(" ").every(comecaEmX) ? "Y" : "N");
  line = lines.shift();
}
