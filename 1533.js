var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
while (N) {
  let line = lines
    .shift()
    .split(" ")
    .map((x) => parseInt(x));
  let vals = new Array(10001).fill(-1);
  let max = 0;
  line.forEach((x, idx) => {
    vals[x] = idx;
    max = max < x ? x : max;
  });
  while (max--) {
    if (vals[max] !== -1) {
      console.log(vals[max] + 1);
      break;
    }
  }
  N = parseInt(lines.shift());
}
