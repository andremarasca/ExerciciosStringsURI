var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");
lines.pop();
lines.shift();

let output = lines.map((linha) => {
  return linha
    .split(" ")
    .filter((palavra) => palavra.trim().length)
    .reduce((acumulador, atual) => {
      return acumulador + atual[0];
    }, "");
});

output.forEach((out) => console.log(out));
