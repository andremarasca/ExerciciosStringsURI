var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");
lines.pop();

let nl = lines.map((linha) => {
  return linha
    .split(" ")
    .filter((palavra) => palavra.trim().length)
    .reduce(
      (info, palavra) => {
        if (palavra[0].toUpperCase() == info["anterior"][0]) {
          if (!info["anterior"][1]) {
            info["aliteracoes"]++;
          }
          info["anterior"][1] = true;
        } else {
          info["anterior"] = [palavra[0].toUpperCase(), false];
        }
        return info;
      },
      { aliteracoes: 0, anterior: ["", false] }
    );
});

nl.map((a) => console.log(a.aliteracoes));
