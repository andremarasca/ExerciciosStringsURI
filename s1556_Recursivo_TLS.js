var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let criaSequencia = (w, m) => {
  let out = "";
  for (let i = 0; i < m.length; i++) {
    if (m[i]) out += w[i];
  }
  return out;
};

function criaCombinacoes(m, i, v, s, output) {
  if (i >= 0) {
    m[i] = v;
  }
  if (i === m.length - 1) {
    output.add(criaSequencia(s, m));
  } else {
    criaCombinacoes(m, i + 1, 1, s, output);
    criaCombinacoes(m, i + 1, 0, s, output);
  }
}

let s = lines.shift();
while (s) {
  let output = new Set();
  criaCombinacoes(new Array(s.length), -1, 0, s, output);
  output = Array.from(output);
  output.sort().shift();
  console.log(output.join("\n") + "\n");
  s = lines.shift();
}
