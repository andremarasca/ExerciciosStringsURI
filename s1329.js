var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
let mary;
while (N) {
  mary = lines
    .shift()
    .split(" ")
    .reduce((s, a) => (a === "0" ? s + 1 : s), 0);
  console.log(`Mary won ${mary} times and John won ${N - mary} times`);
  N = parseInt(lines.shift());
}
