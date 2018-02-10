function jumpingOnClouds(c) {
  jumpCount = 0;
  for (let i = 0; i <= c.length; i++) {
    if (c[i] == 0 && c[i + 1] == 0) {
      i += 2;
      jumpCount += 2;
    } else {
      i++;
      jumpCount++;
    }
  }
  return jumpCount - 1;
}
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
jumpingOnClouds([0, 0, 0, 0, 1, 0]);
