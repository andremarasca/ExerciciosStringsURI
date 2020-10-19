var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let ehMaiuscula = (c) => "A" <= c && c <= "Z";
let ehMinuscula = (c) => "a" <= c && c <= "z";
let ehNumero = (c) => "0" <= c && c <= "9";

line = lines.shift();
while (line) {
  let contemMaiusculas = false;
  let contemMinusculas = false;
  let contemNumeros = false;
  let contemProibidos = false;
  if (6 <= line.length && line.length <= 32) {
    for (let i = 0; i < line.length && !contemProibidos; i++) {
      if (ehMaiuscula(line[i])) {
        contemMaiusculas = true;
      } else if (ehMinuscula(line[i])) {
        contemMinusculas = true;
      } else if (ehNumero(line[i])) {
        contemNumeros = true;
      } else {
        contemProibidos = true;
      }
    }
  }
  if (!contemProibidos && contemMaiusculas && contemMinusculas && contemNumeros) {
    console.log("Senha valida.");
  } else {
    console.log("Senha invalida.");
  }
  line = lines.shift();
}
