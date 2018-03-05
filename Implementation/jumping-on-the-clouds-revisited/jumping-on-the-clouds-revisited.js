function jumpingOnClouds(c, k) {
  energy = 100;
  for (let i = k; i <= c.length + 1; i += k) {
    if (c[i] === 1 || c[c.length - 1] === 1) {
      energy = energy - 1 - 2;
    } else {
      energy = energy - 1;
    }
  }
  return energy;
}
console.log(
  jumpingOnClouds([1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1], 19)
);
