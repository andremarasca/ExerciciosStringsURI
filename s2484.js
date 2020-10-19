var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

lines.forEach((w) => {
  w = w.split("");
  tab = "";
  while (w.length) {
    console.log(tab + w.join(" "));
    w.pop();
    tab += " ";
  }
  console.log("");
});
