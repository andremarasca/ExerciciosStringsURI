var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift();
while (line != ".") {
  let palavras = {};
  line = line.split(" ");
  line.forEach((w) => {
    if (w.length > 2) {
      if (palavras.hasOwnProperty(w)) {
        palavras[w] += w.length - 2;
      } else {
        palavras[w] = w.length - 2;
      }
    }
  });
  let chaveValor = [];
  for (let key in palavras) {
    chaveValor.push([key, palavras[key]]);
  }
  chaveValor.sort((a, b) => b[1] - a[1]);

  let abreviacoes = {};
  let nAbreviacoes = 0;
  chaveValor.forEach((w) => {
    w = w[0];
    if (!abreviacoes.hasOwnProperty(w[0])) {
      nAbreviacoes++;
      abreviacoes[w[0]] = w;
    }
  });
  console.log(line.map((w) => (abreviacoes[w[0]] === w ? w[0] + "." : w)).join(" "));
  console.log(nAbreviacoes);
  let output = [];
  for (let key in abreviacoes) {
    output.push(`${key}. = ${abreviacoes[key]}`);
  }
  output.sort((a, b) => (a < b ? -1 : 1));
  console.log(output.join("\n"));

  line = lines.shift();
}
