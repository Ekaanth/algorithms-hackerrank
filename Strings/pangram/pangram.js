function pangram(s){
  str = s.toLowerCase().split('');
  alphabets = "abcdefghijklmnopqrstuvwxyz".split('');
  counter = 0;
  alphabets.map(char => {
    if (str.indexOf(char) >= 0){
      counter++;
    }

  })
  if (counter === 26){
    console.log('pangram');
  }else{
     console.log('not pangram');
     
  }
}
pangram('We promptly judged antique ivory buckles for the next prize')
pangram('We promptly judged antique ivory buckles for the prize')