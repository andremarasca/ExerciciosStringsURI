var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let ehNumero = (x) => "0" <= x && x <= "9";
let ehLetra = (x) => "A" <= x && x <= "Z";
let mapa = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9];
let line = lines.shift();
while (line) {
  line = line.toUpperCase();
  let output = "";
  for (let i = 0; i < line.length; i++) {
    if (line[i] == "*" || line[i] == "#" || ehNumero(line[i])) {
      output += line[i];
    } else if (ehLetra(line[i])) {
      let idx = line.charCodeAt(i) - 65;
      output += mapa[idx];
    }
  }
  console.log(output);
  line = lines.shift();
}
