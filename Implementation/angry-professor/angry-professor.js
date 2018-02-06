function angryProfessor(k, a) {
  lateCount = 0;
  a.map(student => {
    if(student >= 0){
      lateCount++;
    }
  })
  if(lateCount < k){
    return 'YES'
  }else{
    return 'NO'
  }
  
}
console.log(angryProfessor(1, [88, -17, -96, 43, 83, 99, 25, 90, -39, 86]));
