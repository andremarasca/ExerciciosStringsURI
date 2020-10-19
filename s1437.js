var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let rosa = ["N", "L", "S", "O"];
let N = parseInt(lines.shift());
while (N) {
  let line = lines.shift();
  let dir = 0;
  for (let i = 0; i < N; i++) {
    dir += line[i] === "D" ? 1 : -1;
  }
  dir = ((dir % 4) + 4) % 4;
  console.log(rosa[dir]);
  N = parseInt(lines.shift());
}
