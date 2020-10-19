var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let fb = ["Marasca", "Rolien", "Naej", "Elehcim", "Odranoel"];
let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let K = parseInt(lines.shift());
  for (let j = 0; j < K; j++) {
    let line = parseInt(lines.shift());
    console.log(fb[line]);
  }
}
