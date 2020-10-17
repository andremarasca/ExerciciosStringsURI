var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let mapa = { "@": "a", "&": "e", "!": "i", "*": "o", "#": "u" };
let line = lines.shift();
while (line) {
  console.log(
    line
      .split("")
      .map((x) => (mapa.hasOwnProperty(x) ? mapa[x] : x))
      .join("")
  );
  line = lines.shift();
}
