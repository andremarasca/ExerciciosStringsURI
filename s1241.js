var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");

let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let line = lines.shift().replace("\r", "").split(" ");
  if (line) {
    let A = line[0];
    let B = line[1];
    if (B.length <= A.length) {
      let j = B.length - 1;
      let k = A.length - 1;
      let encaixa = true;
      while (j >= 0 && k >= 0) {
        if (B[j] == A[k]) {
          j--;
          k--;
        } else {
          encaixa = false;
          break;
        }
      }
      if (encaixa) {
        console.log("encaixa");
      } else {
        console.log("nao encaixa");
      }
    } else {
      console.log("nao encaixa");
    }
  }
}
