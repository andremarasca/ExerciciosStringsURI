var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let contagem = new Array(2001).fill(0);
let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let x = parseInt(lines[i]);
  contagem[x]++;
}
for (let i = 0; i <= 2000; i++) {
  if (contagem[i] > 0) {
    console.log(`${i} aparece ${contagem[i]} vez(es)`);
  }
}
