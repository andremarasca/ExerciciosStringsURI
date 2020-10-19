var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
for (let ct = 0; ct < N; ct++) {
  let dieta = lines.shift();
  let comido = [lines.shift(), lines.shift()].join("");
  let hist = new Array(26).fill(-1);
  for (let i = 0; i < dieta.length; i++) {
    let pos = dieta.charCodeAt(i) - 65; // "A" = 65
    hist[pos] = 0;
  }
  let cheater = false;
  for (let i = 0; i < comido.length && !cheater; i++) {
    let pos = comido.charCodeAt(i) - 65; // "A" = 65
    if (hist[pos] !== 0) {
      cheater = true;
    } else {
      hist[pos]++;
    }
  }
  if (cheater) {
    console.log("CHEATER");
  } else {
    let out = "";
    for (let i = 0; i < 26; i++) {
      if (hist[i] === 0) {
        out += String.fromCharCode(i + 65);
      }
    }
    console.log(out);
  }
}
