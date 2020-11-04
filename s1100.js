var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let BFS = (i, j) => {
  let mascara = [
    [-2, +1],
    [-2, -1],
    [+2, +1],
    [+2, -1],
    [-1, +2],
    [+1, +2],
    [-1, -2],
    [+1, -2],
  ];
  let fila = [];
  let dist = [];
  for (let u = 0; u < 8; u++) {
    dist[u] = [];
    for (let v = 0; v < 8; v++) {
      dist[u][v] = -1;
    }
  }
  dist[i][j] = 0;
  fila.push([i, j]);
  while (fila.length) {
    [i, j] = fila.shift();
    mascara.forEach((coordenadas) => {
      [di, dj] = coordenadas;
      let ni = i + di;
      let nj = j + dj;
      if (0 <= ni && ni < 8 && 0 <= nj && nj < 8) {
        if (dist[ni][nj] < 0) {
          dist[ni][nj] = dist[i][j] + 1;
          fila.push([ni, nj]);
        }
      }
    });
  }
  return dist;
};

////// leitura e processamento

for (let l = 0; lines[l]; l++) {
  let line = lines[l];
  i0 = line[0].charCodeAt(0) - 97;
  j0 = parseInt(line[1]) - 1;
  i1 = line[3].charCodeAt(0) - 97;
  j1 = parseInt(line[4]) - 1;
  console.log(
    `To get from ${line.slice(0, 2)} to ${line.slice(3)} takes ${BFS(i0, j0)[i1][j1]} knight moves.`
  );
}
