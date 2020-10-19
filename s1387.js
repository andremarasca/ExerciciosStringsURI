var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift();
while (line != "0 0") {
  console.log(line.split(" ").reduce((s, a) => s + parseInt(a), 0));
  line = lines.shift();
}
