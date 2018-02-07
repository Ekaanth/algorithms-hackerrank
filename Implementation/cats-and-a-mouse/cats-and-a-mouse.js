function catAndMouse(x, y, z) {
  catA = Math.abs(z - x)
  catB = Math.abs(z - y)
  if(catA < catB){
    return 'Cat A'
  }else if (catA === catB){
    return 'Mouse C'
  }else {
    return 'Cat B'
  }
}
console.log(catAndMouse(1, 2, 3));
