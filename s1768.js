var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift();
while (line) {
  let N = parseInt(line);
  let b = Math.floor(N / 2);
  let ast = "*";
  for (let e = b; e >= 0; e--) {
    console.log(" ".repeat(e) + ast);
    ast += "**";
  }
  console.log(" ".repeat(b) + "*");
  console.log(" ".repeat(b - 1) + "***\n");
  line = lines.shift();
}
