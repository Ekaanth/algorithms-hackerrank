function updateLoss(minPrice, sorted, i) {
  let loss = sorted[i] - sorted[i - 1];
  return loss < minPrice || minPrice === 0 ? loss : minPrice;
}
function minimumLoss(price) {
  minPrice = 0;
  sorted = price.slice(0).sort();
  for (let i = sorted.length - 1; i > 0; i--) {
    price.indexOf(sorted[i - 1]) > price.indexOf(sorted[i])
      ? (minPrice = updateLoss(minPrice, sorted, i))
      : null;
  }
  return minPrice;
}
minimumLoss([5, 10, 3]);
minimumLoss([20, 7, 8, 2, 5]);
