var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let line = lines.shift();
  if (line[0] === line[2]) {
    console.log(parseInt(line[0]) * parseInt(line[2]));
  } else if ("a" <= line[1] && line[1] <= "z") {
    console.log(parseInt(line[0]) + parseInt(line[2]));
  } else {
    console.log(parseInt(line[2]) - parseInt(line[0]));
  }
}
