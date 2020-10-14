var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
for (let ct = 0; ct < N; ct++) {
  let A = lines.shift().split("");
  let B = lines.shift().split("");
  let C = "";
  while (A.length) {
    C += A.splice(0, 2).join("");
    C += B.splice(0, 2).join("");
  }
  console.log(C);
}
