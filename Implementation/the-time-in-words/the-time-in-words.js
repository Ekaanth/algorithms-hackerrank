function timeInWords(h, m) {
  numbersBelowTwentyArray = [
    '',
    'one ',
    'two ',
    'three ',
    'four ',
    'five ',
    'six ',
    'seven ',
    'eight ',
    'nine ',
    'ten ',
    'eleven ',
    'twelve ',
    'thirteen ',
    'fourteen ',
    'fifteen ',
    'sixteen ',
    'seventeen ',
    'eighteen ',
    'nineteen '
  ];
  remainingMinutesinWords = '';
  tensArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty'];
  if (m == 0) {
    return numbersBelowTwentyArray[h] + "o' clock";
  }
  if (m === 15) {
    return `quarter past ${numbersBelowTwentyArray[h]}`;
  }
  if (m === 30) {
    return `half past ${numbersBelowTwentyArray[h]}`;
  }
  if (m < 30) {
    if (m === 1) {
      minsWords = numbersBelowTwentyArray[m] + 'minute';
    }
    if (m < 20 && m != 0 && m != 1) {
      minsWords = numbersBelowTwentyArray[m] + 'minutes ';
    }
    if (m > 20 && m != 0) {
      const mins = m.toString().split('');
      minsWords = `${tensArray[mins[0]]} ${
        numbersBelowTwentyArray[mins[1]]
      }minutes`;
    }
    return `${minsWords} past ${numbersBelowTwentyArray[h]}`;
  }
  if (m > 30 && m !== 45) {
    remainingMinutes = 60 - m;
    if (remainingMinutes < 20) {
      remainingMinutesinsWords =
        numbersBelowTwentyArray[remainingMinutes] + 'minutes';
    }
    if (remainingMinutes > 20) {
      const mins = remainingMinutes.toString().split('');
      remainingMinutesinsWords = `${tensArray[mins[0]]} ${
        numbersBelowTwentyArray[mins[1]]
      }minutes`;
    }
    return `${remainingMinutesinsWords} to ${numbersBelowTwentyArray[h + 1]}`;
  }
  if (m === 45) {
    return `quarter to ${numbersBelowTwentyArray[h + 1]}`;
  }
}
console.log(timeInWords(7, 29));
console.log(timeInWords(5, 47));
console.log(timeInWords(5, 00));
console.log(timeInWords(5, 15));
console.log(timeInWords(5, 30));
console.log(timeInWords(5, 45));
console.log(timeInWords(1, 1));
