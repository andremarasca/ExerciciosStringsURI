var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");
console.log(parseInt(lines[0]) - parseInt(lines[1]));
