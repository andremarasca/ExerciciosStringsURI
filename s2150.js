var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let vogais = lines.shift();
while (vogais) {
  let frase = lines.shift();
  let vogaisSet = new Set(vogais.split(""));
  let nVogais = 0;
  for (let i = 0; i < frase.length; i++) {
    if (vogaisSet.has(frase[i])) {
      nVogais++;
    }
  }
  console.log(nVogais);
  vogais = lines.shift();
}
