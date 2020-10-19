var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
for (let ct = 0; ct < N; ct++) {
  let K = parseInt(lines.shift());
  let anterior = false;
  let out = false;
  for (let p = 0; p < K; p++) {
    let S = lines.shift();
    if (anterior && anterior != S) {
      out = "ingles";
    }
    anterior = S;
  }
  if (!out) {
    out = anterior;
  }
  console.log(out);
}
