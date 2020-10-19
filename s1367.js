const { parse } = require("path");

var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let N = parseInt(lines.shift());
while (N) {
  let S = 0;
  let pont = {};
  for (let ct = 0; ct < N; ct++) {
    [I, T, J] = lines.shift().split(" ");
    if (!(I in pont)) {
      pont[I] = [0, J];
    }
    if (J == "correct") {
      S++;
      pont[I] = [parseInt(T) + pont[I][0], J];
    } else if (pont[I][1] != "correct") {
      pont[I] = [pont[I][0] + 20, J];
    }
  }
  let total = 0;
  for (let key in pont) {
    if (pont[key][1] == "correct") {
      total += pont[key][0];
    }
  }
  console.log(S, total);
  N = parseInt(lines.shift());
}
