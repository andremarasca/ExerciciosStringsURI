var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

const letterFilter = (l) => "a" <= l && l <= "z";
let N = parseInt(lines.shift());
for (let ct = 0; ct < N; ct++) {
  let fraseLetras = lines.shift().split("").filter(letterFilter);
  let num = new Set(fraseLetras).size;
  if (num == 26) {
    console.log("frase completa");
  } else if (num >= 13) {
    console.log("frase quase completa");
  } else {
    console.log("frase mal elaborada");
  }
}
