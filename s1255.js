var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\n");

let maxReduce = (a, b) => (a > b ? a : b);
let maxFilterReduce = (acc, val, idx) => {
  if (val == acc.maxCount) {
    acc.list.push(String.fromCharCode(idx + 97));
  }
  return acc;
};
let lettersFilter = (l) => "a" <= l && l <= "z";
let hist = new Array(26);
let N = parseInt(lines.shift());
let str;
for (let i = 0; i < N; i++) {
  str = lines.shift().toLowerCase().split("").filter(lettersFilter);
  hist.fill(0);
  for (let j = 0; j < str.length; j++) {
    let ascii = str[j].charCodeAt(0);
    hist[ascii - 97]++;
  }
  let maxCount = hist.reduce(maxReduce, 0);
  let maxCountList = hist.reduce(maxFilterReduce, { maxCount, list: [] });
  console.log(maxCountList.list.join(""));
}
