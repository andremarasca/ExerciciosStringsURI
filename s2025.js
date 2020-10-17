var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let line = lines[i];
  line = line.split(" ").map((w) => {
    if (w.length === 10 && w.includes("oulupukk")) {
      return "Joulupukki";
    }
    if (w.length === 11 && w.includes("oulupukk")) {
      return "Joulupukki.";
    }
    return w;
  });
  console.log(line.join(" "));
}
