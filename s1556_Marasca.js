var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

function criaCombinacoes(s) {
  let output = new Set("");
  let i = s.length;
  while (i--) {
    Array.from(output).forEach((x) => output.add(s[i] + x));
    output.add(s[i]);
  }
  return Array.from(output);
}

for (let ct = 0; lines[ct]; ct++) {
  console.log(criaCombinacoes(lines[ct]).sort().join("\n") + "\n");
}
