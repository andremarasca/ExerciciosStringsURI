var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
while (N) {
  for (let l = 0; l < N; l++) {
    let line = lines
      .shift()
      .split(" ")
      .map((x) => parseInt(x));
    let res;
    let qtd = 0;
    for (let i = 0; i < 5; i++) {
      if (line[i] <= 127) {
        res = i;
        qtd++;
      }
    }
    if (qtd !== 1) {
      console.log("*");
    } else {
      console.log(String.fromCharCode(res + 65));
    }
  }
  N = parseInt(lines.shift());
}
