function howManyGames(p, d, m, s) {
  let counter = 0;
  let total = 0;
  counter += p;
  p - d >= m ? (p -= d) : (p = m);
  while (counter <= s) {
    counter += p;
    p - d >= m ? (p -= d) : (p = m);
    total++;
  }
  return total;
}
