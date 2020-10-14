var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let eliminaVazios = (w) => w != false;
let eliminaPalavrasComNumeros = () => {
  let numberPattern = /\d+/g;
  return (w) => {
    if (w.match(numberPattern)) {
      return false;
    }
    return true;
  };
};
let eliminaPalavrasComPontosErrados = (w) => {
  w = w.split(".");
  if (w.length > 2 || w[0] == "" || (w.length == 2 && w[1] != "")) {
    return false;
  }
  return true;
};

let somaComprimentos = (soma, atual) => soma + atual.split(".")[0].length;

let line = lines.shift();
while (line) {
  let palavras = line
    .split(" ")
    .filter(eliminaVazios)
    .filter(eliminaPalavrasComNumeros())
    .filter(eliminaPalavrasComPontosErrados);
  let N = palavras.length || 1;
  let soma = palavras.reduce(somaComprimentos, 0);
  let media = parseInt(soma / N);
  if (media <= 3) {
    console.log(250);
  } else if (media < 6) {
    console.log(500);
  } else {
    console.log(1000);
  }
  line = lines.shift();
}
