var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let D = lines.shift();
let S = lines.shift();
while (D) {
  D.includes(S) ? console.log("Resistente") : console.log("Nao resistente");
  D = lines.shift();
  S = lines.shift();
}
