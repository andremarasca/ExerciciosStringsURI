var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let t = parseInt(lines.shift());
for (let k = 1; k <= t; k++) {
  let mensagem = lines
    .shift()
    .split("")
    .filter((x) => "a" <= x && x <= "z")
    .reverse()
    .join("");
  console.log(mensagem);
}
