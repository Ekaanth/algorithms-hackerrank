function gemstones(arr) {
  rocks = arr.map(a => a.split(''));
  common = rocks.shift().filter(stone => {
    return rocks.every(element => {
      return element.indexOf(stone) !== -1;
    });
  });
  return new Set(common).size;
}
