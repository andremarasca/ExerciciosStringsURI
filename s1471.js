var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let contagem = new Array(10001);
let line = lines.shift();
while (line) {
  let [N, R] = line.split(" ").map((x) => parseInt(x));
  line = lines.shift();
  if (N === R) {
    console.log("*");
  } else {
    let output = "";
    for (let i = 1; i <= N; i++) contagem[i] = 0;
    line.split(" ").forEach((x) => contagem[parseInt(x)]++);
    for (let i = 1; i <= N; i++) {
      if (contagem[i] === 0) {
        output += `${i} `;
      }
    }
    console.log(output);
  }
  line = lines.shift();
}
