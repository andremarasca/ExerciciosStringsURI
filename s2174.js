var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
let num = new Set(lines.filter((x) => x != "")).size;
console.log(`Falta(m) ${151 - num} pomekon(s).`);
