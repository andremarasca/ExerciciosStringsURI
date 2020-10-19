var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
for (let ct = 0; ct < N; ct++) {
  let L = parseInt(lines.shift());
  let total = 0;
  for (let i = 0; i < L; i++) {
    let line = lines.shift();
    for (let j = 0; j < line.length; j++) {
      total += line.charCodeAt(j) + i + j - 65;
    }
  }
  console.log(total);
}
