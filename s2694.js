var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
for (let ct = 0; ct < N; ct++) {
  let line = lines.shift();
  let A = parseInt(line.slice(2, 4));
  let B = parseInt(line.slice(5, 8));
  let C = parseInt(line.slice(11));
  console.log(A + B + C);
}
