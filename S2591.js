var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let C = parseInt(lines.shift());
for (let ct = 0; ct < C; ct++) {
  let line = lines.shift().split("mek");
  let a = line[0].length - 1;
  let b = line[1].length - 2;
  console.log(`k${"a".repeat(a * b)}`);
}
