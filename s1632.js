var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let letras = new Set("AEIOSaeios".split(""));
let T = parseInt(lines.shift());
for (let ct = 0; ct < T; ct++) {
  let line = lines.shift();
  let mult = 1;
  for (let i = 0; i < line.length; i++) {
    if (letras.has(line[i])) {
      mult *= 3;
    } else {
      mult *= 2;
    }
  }
  console.log(mult);
}
