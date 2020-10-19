var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");

let line = lines.shift().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
while (A || B) {
  let res = A + B;
  console.log(`${res}`.split("0").join(""));
  line = lines.shift().split(" ");
  A = parseInt(line[0]);
  B = parseInt(line[1]);
}
