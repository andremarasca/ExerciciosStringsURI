var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let objetivo = "cobol";
let line = lines.shift();
while (line) {
  let idxObjetivo = 0;
  line.split("-").forEach((w) => {
    if (idxObjetivo < 5) {
      if (
        w[0].toLowerCase() === objetivo[idxObjetivo] ||
        w[w.length - 1].toLowerCase() === objetivo[idxObjetivo]
      ) {
        idxObjetivo++;
      }
    }
  });
  if (idxObjetivo === 5) {
    console.log("GRACE HOPPER");
  } else {
    console.log("BUG");
  }
  line = lines.shift();
}
