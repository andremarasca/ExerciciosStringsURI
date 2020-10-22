var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let buscaBinaria = (arr, A, N) => {
  let meio = 0;
  let inicio = 0;
  let fim = Math.max(...arr);
  let area = -1;
  let i;
  while (Math.abs(A - area) > 0.00005) {
    meio = (inicio + fim) / 2;
    area = 0;
    for (i = 0; i < N; i++) {
      if (arr[i] > meio) {
        area += arr[i] - meio;
      } else {
        break;
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

let line = lines.shift();
while (line !== "0 0") {
  line = line.split(" ");
  let N = parseInt(line[0]);
  let A = parseInt(line[1]);
  line = lines
    .shift()
    .split(" ")
    .map((x) => parseInt(x));
  let soma = line.reduce((soma, atual) => soma + atual, 0);
  if (soma === A) {
    console.log(":D");
  } else if (soma < A) {
    console.log("-.-");
  } else {
    line.sort((a, b) => b - a);
    console.log(buscaBinaria(line, A, N).toFixed(4));
  }
  line = lines.shift();
}
