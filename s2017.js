var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let original = lines.shift();
let k = parseInt(lines.shift());
let minDist = k + 1;
let idxMinDist = -1;
for (let i = 0; i < 5; i++) {
  let line = lines.shift();
  let dist = 0;
  for (let j = 0; j < line.length; j++) {
    dist += line[j] != original[j] ? 1 : 0;
  }
  if (minDist > dist) {
    minDist = dist;
    idxMinDist = i + 1;
  }
}
console.log(idxMinDist);
if (minDist <= k) {
  console.log(minDist);
}
