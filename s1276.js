var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");

let output = lines.map((line) => {
  let letras = new Array(27).fill(false);
  for (let i = 0; i < line.length; i++) {
    let idx = line.charCodeAt(i) - 97;
    if (idx >= 0) {
      letras[idx] = true;
    }
  }
  let inicio = 0;
  let strOut = "";
  let primeiro = true;
  for (let i = 1; i < 27; i++) {
    if (!letras[i - 1] && letras[i]) {
      inicio = i;
    } else if (letras[i - 1] && !letras[i]) {
      if (!primeiro) strOut += ", ";
      primeiro = false;
      strOut += `${String.fromCharCode(inicio + 97)}:${String.fromCharCode(i - 1 + 97)}`;
    }
  }
  return strOut;
});

output = output.join("\n");
process.stdout.write(output.slice(0, output.length));
