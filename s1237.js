var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let a = lines.shift();
let b = lines.shift();
while (a && b) {
  let maior = 0;
  for (let u = 0; u < a.length; u++) {
    for (let v = b.length - 1; v >= 0; v--) {
      let i = u;
      let j = v;
      let iguais = 0;
      let maiorInterno = 0;
      while (i < a.length && j < b.length) {
        if (a[i] == b[j]) {
          iguais++;
        } else {
          iguais = 0;
        }
        if (maiorInterno < iguais) {
          maiorInterno = iguais;
        }
        i++;
        j++;
      }
      if (maior < maiorInterno) {
        maior = maiorInterno;
      }
    }
  }
  console.log(maior);
  a = lines.shift();
  b = lines.shift();
}
