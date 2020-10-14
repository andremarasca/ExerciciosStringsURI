var input = require("fs").readFileSync(__dirname + "/dev/stdin/input.txt", "utf8");
var lines = input.split("\r").join("").split("\n");

let S = lines.shift().toLowerCase();
S.includes("zelda") ? console.log("Link Bolado") : console.log("Link Tranquilo");
