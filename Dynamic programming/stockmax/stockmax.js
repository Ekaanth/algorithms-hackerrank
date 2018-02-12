function isIncreasing(numbers) {
  return numbers.every((x, i) => i === 0 || x >= numbers[i - 1]);
}
function profitCalculator(sharesBought, currentPrice) {
  let profit = 0;
  if (sharesBought.length > 0) {
    let sum = sharesBought.reduce((a, b) => a + b);
    let totalValue = currentPrice * sharesBought.length;
    profit = totalValue - sum;
  }
  return profit;
}
function stockmax(prices) {
  profit = 0;
  if (isIncreasing(prices)) {
    sharesBought = [];
    currentPrice = 0;
    for (let i = 0; i < prices.length; i++) {
      currentPrice = prices[i];
      if (prices[i] < prices[i + 1]) {
        sharesBought.push(prices[i]);
      }
    }
    profit = profitCalculator(sharesBought, currentPrice);
  } else if (!isIncreasing(prices) && Math.max(...prices) == prices[0]) {
    return profit;
  } else {
    let sharesBought = [];
    let currentPrice = 0;
    for (let i = 0; i < prices.length; i++) {
      currentPrice = prices[i];
      if (currentPrice < prices[i + 1] && ) {
        sharesBought.push(currentPrice);
      }
    }
    console.log('Shares', sharesBought);
  }
  return profit;
}

console.log(stockmax([1, 2, 100]));
console.log(stockmax([5, 3, 2]));

console.log(stockmax([1, 3, 1, 2]));

// else {
//     console.log('current', currentPrice);
//     let remainingPrices = prices.slice(i + 1);
//     console.log('remainingPrices', remainingPrices);

//   if (isIncreasing(remainingPrices) && remainingPrices.length > 0) {
//     let lossArray = [];
//     for (let j = 0; j < remainingPrices.length; j++) {
//       lossArray.push(Math.abs(remainingPrices[j] - currentPrice));
//     }
//     console.log(lossArray);

//     profit += Math.min(...lossArray);
//   }
//   }
