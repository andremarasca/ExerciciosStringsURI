var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");
lines.pop();

const max = (a, b) => (a > b ? a : b);
const maxList = (acc, x) => max(acc, x.length);
const padding = (palavra, len) => " ".repeat(len - palavra.length) + palavra;

let primeiro = true;
let line = lines.shift();
while (line) {
  if (!primeiro) console.log();
  primeiro = false;
  let N = parseInt(line);
  let casoTeste = lines.splice(0, N);
  let maxLen = casoTeste.reduce(maxList, 0);
  casoTeste.forEach((palavra) => console.log(padding(palavra, maxLen)));
  line = lines.shift();
}
