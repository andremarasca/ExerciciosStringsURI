var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let A = lines.shift();
  let B = lines.shift();
  let C = lines.shift();
  let Af = [];
  let Bf = [];
  for (let j = 0; j < C.length; j++) {
    if (C[j] == "_") {
      Af.push(A[j]);
      Bf.push(B[j]);
    }
  }
  if (Af[0] === Bf[1] || Af[1] === Bf[0]) {
    console.log("Y");
  } else {
    console.log("N");
  }
}
