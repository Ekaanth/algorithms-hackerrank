function jumpingOnClouds(c) {
  jumpCount = 0;
  for (let i = 0; i <= c.length; i++) {
    if (c[i + 1] == 0 && c[i + 2] == 0) {
      i += 1;
      jumpCount++;
    } else if (c[i + 1] == 1 && c[i + 2] == 0) {
      i++;
      jumpCount++;
    } else jumpCount++;
  }
  return jumpCount - 2;
}
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
jumpingOnClouds([0, 0, 0, 0, 1, 0]);
