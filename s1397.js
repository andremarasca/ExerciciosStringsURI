var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
while (N) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < N; i++) {
    let j = lines
      .shift()
      .split(" ")
      .map((x) => parseInt(x));
    if (j[0] > j[1]) a++;
    else if (j[0] < j[1]) b++;
  }
  console.log(a, b);
  N = parseInt(lines.shift());
}
