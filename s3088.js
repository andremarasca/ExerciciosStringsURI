var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

for (let ct = 0; lines[ct]; ct++) {
  console.log(lines[ct].split(" ,").join(",").split(" .").join("."));
}
