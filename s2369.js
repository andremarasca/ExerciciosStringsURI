var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
if (N <= 10) {
  console.log(7);
} else if (N <= 30) {
  console.log(7 + (N - 10));
} else if (N <= 100) {
  console.log(27 + (N - 30) * 2);
} else {
  console.log(167 + (N - 100) * 5);
}
