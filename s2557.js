var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift();
while (line) {
  line = line.split("=");
  let J = line[1];
  line = line[0].split("+");
  let R = line[0];
  let L = line[1];
  if (J === "J") {
    console.log(parseInt(R) + parseInt(L));
  } else if (R === "R") {
    console.log(parseInt(J) - parseInt(L));
  } else {
    console.log(parseInt(J) - parseInt(R));
  }
  line = lines.shift();
}
