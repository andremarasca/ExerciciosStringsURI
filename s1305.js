var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");

let num = parseFloat(lines.shift());
let cutoff = parseFloat(lines.shift());
while (num && cutoff) {
  let numInt = parseInt(num);
  if (num - numInt >= cutoff) {
    num = numInt + 1;
  } else {
    num = numInt;
  }
  console.log(num);
  num = parseFloat(lines.shift());
  cutoff = parseFloat(lines.shift());
}
