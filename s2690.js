var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let digitos = [
  "GQaku",
  "ISblv",
  "EOYcmw",
  "FPZdnx",
  "JTeoy",
  "DNXfpz",
  "AKUgq",
  "CMWhr",
  "BLVis",
  "HRjt",
];

let mapa = [];
for (let i = 0; i < digitos.length; i++) {
  for (let j = 0; j < digitos[i].length; j++) {
    mapa[digitos[i].charCodeAt(j)] = i;
  }
}
mapa[" ".charCodeAt(0)] = -1;

let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  output = "";
  let k = 0;
  let tam = Math.min(20, lines[i].length);
  for (let j = 0; j < tam && k < 12; j++) {
    let num = mapa[lines[i].charCodeAt(j)];
    if (num >= 0) {
      k++;
      output += num;
    }
  }
  console.log(output);
}
