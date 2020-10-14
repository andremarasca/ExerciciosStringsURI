var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

lines = lines.filter((x) => x != false);

let line = lines.shift().split(" ");
let N = parseInt(line[0]);
let M = parseInt(line[1]);

let mapa = {};
for (let i = 0; i < N; i++) {
  line = lines.shift().split(" ");
  mapa[line[0]] = line[1];
  mapa[line[1]] = line[0];
}

let output = "";
for (let i = 0; i < M; i++) {
  line = lines.shift();
  if (line) {
    output = "";
    for (let j = 0; j < line.length; j++) {
      if (mapa.hasOwnProperty(line[j])) {
        output += mapa[line[j]];
      } else {
        output += line[j];
      }
    }
  }
  console.log(output);
}
