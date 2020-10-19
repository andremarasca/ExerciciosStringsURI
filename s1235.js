var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");

let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let line = lines.shift().replace("\r", "").split("");
  let inicio = line.splice(0, line.length / 2);
  line = line.concat(inicio);
  line = line.reverse().join("");
  console.log(line);
}
