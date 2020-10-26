var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let buscaBinaria = (arr, A, N) => {
  let meio = 0;
  let inicio = 0;
  let fim = Math.max(...arr);
  let area = -1;
  let i;
  while (Math.abs(A - area) >= 0.00005) {
    meio = (inicio + fim) / 2;
    area = 0;
    for (i = 0; i < N; i++) {
      if (arr[i] > meio) {
        area += arr[i] - meio;
        if (area > A + 2) break;
      }
    }
    if (area > A) {
      inicio = meio;
    } else if (area < A) {
      fim = meio;
    }
  }
  return meio;
};

let line, N, A, soma;
let ct = 0;
while (lines[ct] !== "0 0") {
  line = lines[ct++].split(" ");
  N = parseInt(line[0]);
  A = parseInt(line[1]);
  line = lines[ct++].split(" ").map((x) => parseInt(x));
  soma = line.reduce((soma, atual) => soma + atual, 0);
  if (soma === A) {
    console.log(":D");
  } else if (soma < A) {
    console.log("-.-");
  } else {
    console.log(buscaBinaria(line, A, N).toFixed(4));
  }
}
