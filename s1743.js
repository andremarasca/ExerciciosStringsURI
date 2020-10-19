var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let A = lines.shift();
let B = lines.shift();
let compativel = true;
for (let i = 0; i < A.length && compativel; i++) {
  if (A[i] !== " " && A[i] === B[i]) compativel = false;
}
console.log(compativel ? "Y" : "N");
