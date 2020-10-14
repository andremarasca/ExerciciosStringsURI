var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let ehNumero = (c) => "0" <= c && c <= "9";

let N = parseInt(lines.shift());
for (let ct = 0; ct < N; ct++) {
  let line = lines.shift();
  if (line.length != 20 || line.slice(0, 2) != "RA") {
    console.log("INVALID DATA");
  } else {
    let valido = true;
    for (let i = 2; i < line.length && valido; i++) {
      if (!ehNumero(line[i])) {
        valido = false;
      }
    }
    if (valido) {
      let iniciou = false;
      let i;
      for (i = 2; i < line.length && !iniciou; i++) {
        if (line[i] != "0") {
          iniciou = true;
        }
      }
      if (iniciou) {
        console.log(line.slice(i - 1));
      } else {
        console.log("INVALID DATA");
      }
    } else {
      console.log("INVALID DATA");
    }
  }
}
