var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");

let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let str = lines.shift().replace("\r", "");
  let d = parseInt(lines.shift());
  let out = "";
  for (let j = 0; j < str.length; j++) {
    out += String.fromCharCode(((str.charCodeAt(j) - (d % 26) - 65 + 26) % 26) + 65);
  }
  console.log(out);
}
