const { performance } = require("perf_hooks");

let i;
let len;
let t1;
let t0;
let A;
for (N = 100; N < 100000000; N *= 10) {
  A = "a".repeat(N);
  console.log(`Para N = ${N}`);

  t0 = performance.now();
  len = A.length;
  for (i = 0; i < len; i++) {}
  t1 = performance.now();
  console.log("COM VARIAVEL AUXILIAR: " + (t1 - t0) + " milliseconds.");

  t0 = performance.now();
  for (i = 0; i < A.length; i++) {}
  t1 = performance.now();
  console.log("SEM VARIAVEL AUXILIAR: " + (t1 - t0) + " milliseconds.");

  console.log("");
}
