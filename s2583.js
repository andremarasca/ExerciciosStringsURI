var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let C = parseInt(lines.shift());
for (let ct = 0; ct < C; ct++) {
  let N = parseInt(lines.shift());
  let inventario = new Set();
  for (let i = 0; i < N; i++) {
    let line = lines.shift().split(" ");
    if (line[1] === "chirrion") {
      if (inventario.has(line[0])) {
        inventario.delete(line[0]);
      }
    } else if (line[1] === "chirrin") {
      inventario.add(line[0]);
    }
  }
  console.log("TOTAL");
  console.log(Array.from(inventario).sort().join("\n"));
}
