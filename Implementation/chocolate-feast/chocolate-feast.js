collectedWrappers = 0;
function chocolateFeast(n, c, m) {
  chocosBought = n / c;
  total = chocosBought;
  wrappersExchange = Math.trunc(chocosBought / m);
  remainingWrappers = chocosBought / m - wrappersExchange;
  collectedWrappers += remainingWrappers;
  if (wrappersExchange > 0) {
    total = chocosBought + wrappersExchange;
  }
  if (collectedWrappers > 0) {
    promo = Math.trunc(collectedWrappers);
    total += promo;
  }
  return total;
}
chocolateFeast(10, 2, 5);
console.log('remains', collectedWrappers);
chocolateFeast(12, 4, 4);
console.log('remains', collectedWrappers);
chocolateFeast(6, 2, 2);
console.log('remains', collectedWrappers);
