var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");

let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let line = lines.shift().split(" ");
  let B = parseInt(line.shift());
  let E = parseInt(line.shift());
  let out = "";
  for (let j = B; j <= E; j++) {
    out += j;
  }
  out = out + out.split("").reverse().join("");
  console.log(out);
}
