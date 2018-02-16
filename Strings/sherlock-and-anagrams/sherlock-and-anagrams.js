function sherlockAndAnagrams(s) {
  str = s.split('');
  occuringCount = {};
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length - i; j++) {
      current = str.slice(j, j + i + 1);
      sortedCurrent = current.sort().join('');
      console.log(sortedCurrent);
      occuringCount[sortedCurrent] === undefined
        ? (occuringCount[`${sortedCurrent}`] = 0)
        : null;
      occuringCount[sortedCurrent] += 1;
    }
  }
  count = 0;
  keys = Object.keys(occuringCount);
  keys.forEach(key => {
    current = occuringCount[key];
    count += (current - 1) * current / 2;
  });
  return count;
}

sherlockAndAnagrams('abba');
sherlockAndAnagrams('abcd');
