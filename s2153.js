var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let line = lines.shift();
while (line) {
  console.log(line);
  let metade = parseInt(line.length / 2);
  let sliceMax = 0;
  for (let i = 1; i <= metade; i++) {
    if (line.slice(-2 * i, -i) === line.slice(-i)) {
      sliceMax = i;
    }
  }
  if (sliceMax) console.log(line.slice(0, -sliceMax));
  else console.log(line);
  console.log("");
  line = lines.shift();
}
