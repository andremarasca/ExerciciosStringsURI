var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let [P, R] = lines.shift().split(" ");
if (P === "1") {
  if (R === "1") {
    console.log("A");
  } else {
    console.log("B");
  }
} else {
  console.log("C");
}
