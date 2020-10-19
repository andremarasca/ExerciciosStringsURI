var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let top = [1, 3, 5, 10, 25, 50, 100];
let N = parseInt(lines.shift());
for (let i = 0; i < top.length; i++) {
  if (N <= top[i]) {
    console.log(`Top ${top[i]}`);
    break;
  }
}
