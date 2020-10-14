var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let emailsValidos = new Set();
let N = parseInt(lines.shift());
for (let i = 0; i < N; i++) {
  let line = lines.shift();
  let info = line.split("@");
  let user = info[0].split("+")[0];
  user = user.split(".").join("");
  emailsValidos.add(user + "@" + info[1]);
}
console.log(emailsValidos.size);
