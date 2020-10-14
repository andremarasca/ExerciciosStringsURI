const { performance } = require("perf_hooks");

function encherArrayDeStrings(N) {
  let array = [];
  for (let i = 0; i < N; i++) {
    array.push("aa");
  }
  return array.join("");
}

function encherStringConcat(N) {
  let out = "";
  for (let i = 0; i < N; i++) {
    out += "a";
  }
  return out;
}

for (N = 100; N < 1000000000; N *= 10) {
  console.log(`Para N = ${N}`);
  var t0 = performance.now();
  encherArrayDeStrings(N); // <---- The function you're measuring time for
  var t1 = performance.now();
  console.log("Encher array: " + (t1 - t0) + " milliseconds.");

  t0 = performance.now();
  encherStringConcat(N); // <---- The function you're measuring time for
  t1 = performance.now();
  console.log("concatenar string: " + (t1 - t0) + " milliseconds.");
  console.log("");
}
