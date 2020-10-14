var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift();
while (line) {
  let contagem = new Array(26).fill(0);
  for (let i = 0; i < line.length; i++) {
    contagem[line.charCodeAt(i) - 97]++;
  }
  let impares = 0;
  for (let i = 0; i < 26; i++) {
    if (contagem[i] % 2 != 0) {
      impares++;
    }
  }
  console.log(impares <= 1 ? 0 : impares - 1);
  line = lines.shift();
}
