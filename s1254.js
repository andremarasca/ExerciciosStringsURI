var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let tag = lines.shift();
while (tag) {
  let novo = lines.shift();
  let line = lines.shift();
  let dentro = false;
  let output = "";
  let outTmp = "";
  let j = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] == "<") dentro = true;
    else if (line[i] == ">") dentro = false;
    if (dentro) {
      if (line[i].toUpperCase() == tag[j].toUpperCase()) {
        j++;
        outTmp += line[i];
      } else if (j != 0) {
        output += outTmp + line[i];
        j = 0;
        outTmp = "";
      } else {
        output += line[i];
      }
      if (j == tag.length) {
        output += novo;
        j = 0;
        outTmp = "";
      }
    } else {
      output += outTmp + line[i];
      j = 0;
      outTmp = "";
    }
  }
  console.log(output);
  tag = lines.shift();
}
