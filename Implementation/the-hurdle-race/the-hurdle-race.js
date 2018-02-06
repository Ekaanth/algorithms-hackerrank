function hurdleRace(k, height) {
  magicDrink = 0;
  height.map(h => {
    if (h > k){
      magicDrink = Math.max(...height) - k
    }
  })
   return magicDrink
}
hurdleRace(4, [ 1, 6, 3, 5, 2 ])