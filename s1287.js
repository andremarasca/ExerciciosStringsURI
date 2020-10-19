var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");
lines.pop();

const isNum = (texto) => /^\d+$/.test(texto);

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

lines.forEach((line) => {
  line = replaceAll(line, "o", "0");
  line = replaceAll(line, "O", "0");
  line = replaceAll(line, "l", "1");
  line = replaceAll(line, ",", "");
  line = replaceAll(line, " ", "");
  line = replaceAll(line, "\r", "");
  let valor = parseInt(line);
  if (isNaN(valor) || valor > 2147483647) {
    console.log("error");
  } else {
    if (isNum(line)) {
      console.log(valor);
    } else {
      console.log("error");
    }
  }
});
