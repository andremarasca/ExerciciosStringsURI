var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let regras = {
  tesoura: ["papel", "lagarto"],
  papel: ["pedra", "spock"],
  pedra: ["lagarto", "tesoura"],
  lagarto: ["spock", "papel"],
  spock: ["tesoura", "pedra"],
};

let N = parseInt(lines.shift());
for (let ct = 0; ct < N; ct++) {
  let line = lines.shift().toLowerCase().split(" ");
  let Rajesh = line[0];
  let Sheldon = line[1];
  if (regras[Rajesh].includes(Sheldon)) {
    console.log("rajesh");
  } else if (regras[Sheldon].includes(Rajesh)) {
    console.log("sheldon");
  } else {
    console.log("empate");
  }
}
