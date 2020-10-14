x1p = 0;
z1p = 0;
x2p = 0;
z2p = 0;
x1s = 0;
z1s = 0;
x2s = 0;
z2s = 0;

Ap = (z1p - z2p) / (x1p - x2p);
Bp = (x1p * z2p - x2p * z1p) / (x1p - x2p);

As = (z1s - z2s) / (x1s - x2s);
Bs = (x1s * z2s - x2s * z1s) / (x1s - x2s);

x = (Bs - Bp) / (Ap - As);
z = Ap * x + Bp;

console.log(`O portal do end fica em: ${x} 100 ${z}`);
