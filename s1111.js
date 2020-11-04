let BFS = (x0, y0, mapa) => {
  let M = mapa.length;
  let N = mapa[0].length;
  let mascara = [
    [+1, 0],
    [-1, 0],
    [0, -1],
    [0, +1],
  ];
  let fila = [];
  let dist = [];
  for (let u = 0; u < M; u++) {
    dist[u] = [];
    for (let v = 0; v < N; v++) {
      dist[u][v] = -1;
    }
  }
  dist[y0][x0] = 0;
  fila.push([y0, x0]);
  while (fila.length) {
    let [i, j] = fila.shift();
    mascara.forEach(([di, dj], idx) => {
      if (mapa[i][j][idx] === "1") {
        let ni = i + di;
        let nj = j + dj;
        if (0 <= ni && ni < M && 0 <= nj && nj < N) {
          if (dist[ni][nj] < 0) {
            dist[ni][nj] = dist[i][j] + 1;
            fila.push([ni, nj]);
          }
        }
      }
    });
  }
  return dist;
};

////// leitura e processamento

var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");
let print = console.log;

let N = parseInt(lines.shift());
while (N) {
  let mapa = [];
  for (let i = N - 1; i >= 0; i--) {
    let line = lines.shift().split(" ");
    mapa[i] = [];
    while (line.length) {
      mapa[i].push(line.splice(0, 4));
    }
  }
  let K = parseInt(lines.shift());
  for (let i = 0; i < K; i++) {
    let [x0, y0, x1, y1] = lines
      .shift()
      .split(" ")
      .map((x) => parseInt(x));
    let distancia = BFS(x0, y0, mapa);
    print(distancia[y1][x1] >= 0 ? distancia[y1][x1] : "Impossible");
  }
  print("");
  N = parseInt(lines.shift());
}
