var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
while (N) {
  let livros = lines.splice(0, N);
  livros.sort();
  console.log(livros.join("\n"));
  N = parseInt(lines.shift());
}
