var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let nome = lines.shift();
let dataH = lines
  .shift()
  .split("/")
  .map((x) => parseInt(x));
let dataN = lines
  .shift()
  .split("/")
  .map((x) => parseInt(x));
let anos;
if (dataH[1] > dataN[1]) {
  anos = dataH[2] - dataN[2];
} else if (dataH[1] < dataN[1]) {
  anos = dataH[2] - dataN[2] - 1;
} else if (dataH[1] === dataN[1]) {
  if (dataH[0] > dataN[0]) {
    anos = dataH[2] - dataN[2];
  } else if (dataH[0] < dataN[0]) {
    anos = dataH[2] - dataN[2] - 1;
  } else if (dataH[0] === dataN[0]) {
    anos = dataH[2] - dataN[2];
    console.log("Feliz aniversario!");
  }
}
console.log(`Voce tem ${anos} anos ${nome}.`);
