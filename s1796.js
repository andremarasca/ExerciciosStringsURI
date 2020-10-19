var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
let line = lines.shift();
let s = 0;
for (let i = 0; i < line.length; i++) {
  if (line[i] === "0") s++;
}
console.log(s > N - s ? "Y" : "N");
