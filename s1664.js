let bingos = require("fs")
  .readFileSync(__dirname + "/dev/stdin/input.txt", "utf8")
  .toUpperCase()
  .split("")
  .map((c) => ("A" <= c && c <= "Z" ? c : "."))
  .join("")
  .split("BULLSHIT");
bingos.pop(); // remover jogo incompleto
let nBingos = bingos.length;
let nPalavras = 0;
bingos.forEach((linha) => {
  linha = linha.split(".").filter((x) => x != false);
  nPalavras += new Set(linha).size;
});
function reduce(numer, denomin) {
  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  gcd = gcd(numer, denomin);
  return [numer / gcd, denomin / gcd];
}
console.log(reduce(nPalavras, nBingos).join(" / "));
