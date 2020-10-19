var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let min = Number.MAX_VALUE;
let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let line = lines.shift().split(" ");
  let P = parseFloat(line[0]);
  let G = parseInt(line[1]);
  min = Math.min((P / G) * 1000, min);
}
console.log(min.toFixed(2));
