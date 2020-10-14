var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let palavras = lines.shift().split(" ");
let corrigido = palavras.map((w) => {
  if (w.slice(0, 2) === w.slice(2, 4)) {
    return w.slice(2);
  }
  return w;
});
console.log(corrigido.join(" "));
