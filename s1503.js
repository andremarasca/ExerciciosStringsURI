var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let maiorComprimento = (maior, atual) => (atual.length > maior ? atual.length : maior);
let N = lines.shift();
while (N) {
  N = parseInt(N);
  let palindromos = [];
  for (let l = 0; l < N; l++) {
    let line = lines.shift();
    palindromos.push(new Set(line.split("")));
    let tam = line.length - 1;
    for (let i = 0; i < tam; i++) {
      let u = i;
      let v = i + 1;
      while (u >= 0 && v < line.length && line[u] === line[v]) {
        palindromos[l].add(line.slice(u, v + 1));
        u--;
        v++;
      }
    }
    tam = line.length - 2;
    for (let i = 0; i < tam; i++) {
      let u = i;
      let v = i + 2;
      while (u >= 0 && v < line.length && line[u] === line[v]) {
        palindromos[l].add(line.slice(u, v + 1));
        u--;
        v++;
      }
    }
  }
  let pComum = palindromos.shift();
  for (let p = 0; p < palindromos.length; p++) {
    let pAtual = palindromos[p];
    pComum.forEach((palindromo) => {
      if (!pAtual.has(palindromo)) {
        pComum.delete(palindromo);
      }
    });
  }
  console.log(Array.from(pComum).reduce(maiorComprimento, 0));
  N = lines.shift();
}
