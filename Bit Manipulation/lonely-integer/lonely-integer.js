function lonelyinteger(a) {
  xor = (a, b) => a ^ b;
  return a.reduce(xor);
}
console.log(lonelyinteger([0, 0, 1, 2, 1]));
