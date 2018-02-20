function pickingNumbers(a) {
  countedNumbers = a.reduce((allNumbers, num) => {
    if (num in allNumbers) {
      allNumbers[num]++;
    } else {
      allNumbers[num] = 1;
    }
    return allNumbers;
  }, {});
  countedKeys = Object.keys(countedNumbers);
  selectedKeys = [];
  for (let i = 0; i < countedKeys.length - 1; i++) {
    if (
      Math.abs(
        countedNumbers[countedKeys[i + 1]] - countedNumbers[countedKeys[i]]
      ) === 1
    ) {
      selectedKeys.push(
        countedNumbers[countedKeys[i]] + countedNumbers[countedKeys[i + 1]]
      );
    }
  }
  values = [];
  for (key in countedNumbers) {
    if (countedNumbers.hasOwnProperty(key)) {
      var value = countedNumbers[key];
      values.push(value);
    }
  }
  keysAndMostFrequency = selectedKeys.concat(values);
  console.log(keysAndMostFrequency);
  return Math.max(...keysAndMostFrequency);
}
pickingNumbers([4, 6, 5, 3, 3, 1]);
