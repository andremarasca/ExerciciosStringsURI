var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let t = parseInt(lines.shift());
for (let k = 1; k <= t; k++) {
  let A = lines.shift();
  let B = lines.shift();
  let C = lines.shift();
  let primeiroAcerto = 0;
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < A.length; i++) {
    if (B[i] != C[i]) {
      if (B[i] === A[i]) {
        if (!primeiroAcerto) primeiroAcerto = 1;
        p1++;
      } else if (C[i] === A[i]) {
        if (!primeiroAcerto) primeiroAcerto = 2;
        p2++;
      }
    }
  }
  console.log(`Instancia ${k}`);
  if (p1 > p2) {
    console.log("time 1");
  } else if (p2 > p1) {
    console.log("time 2");
  } else if (primeiroAcerto > 0) {
    console.log(`time ${primeiroAcerto}`);
  } else {
    console.log("empate");
  }
  console.log("");
}
