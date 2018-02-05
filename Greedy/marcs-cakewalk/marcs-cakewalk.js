function marcsCakewalk(calorie) {
  let c = (a, b) => b-a
  calorie.sort(c)
  cakesAleadytAte = 0;
  total = 0;
  for (let i = 0; i < calorie.length; i++) {
    console.log(calorie[i]);
    total = total + (calorie[i] * Math.pow(2, cakesAleadytAte))
    cakesAleadytAte++;
    
  }  
  return total;
}

marcsCakewalk([504, 378, 291, 380, 728, 630, 797, 212, 32, 792, 895, 635, 850, 853, 859, 127, 653, 655, 476, 748]);