function checker(data) {
    
  if(data['h0'] <= data['a1']  &&
     data['c2'] <= data['k3'] &&
     data['e4'] <= data['r5'] &&
     data['r6'] <= data['a7'] &&
     data['n8'] <= data['k9']
){
  return true;
}
else return false
}
function hackerrankInString(s) {
  test = 'hackerrank'.split('');
  alphaCount = {};
  output = [];
  test.map(s => {
    if (alphaCount[s] === undefined) {
      alphaCount[s] = 0;
    }
    if (alphaCount[s] === 0 || alphaCount[s] > 0) {
      alphaCount[s] += 1
    }
  });
  alphaKeys = Object.keys(alphaCount);
  s.map(word => {
    if (word !== undefined) {
      let wordArray = word.split('');
      wordAlphaCount = {};
      wordArray.map(s => {
        if (wordAlphaCount[s] === undefined) {
          wordAlphaCount[s] = 0;
        }
        if (wordAlphaCount[s] === 0 || wordAlphaCount[s] > 0) {
          wordAlphaCount[s] += 1
        }
      });
      let count = 0;
      alphaKeys.map(key => {
        if (alphaCount[key] <= wordAlphaCount[key] ) {
          count = count + alphaCount[key];
        }
      })
      let mapper = {};
      for (let i = 0; i < test.length; i++) {
        mapper[`${test[i]}${i}`] = wordArray.indexOf(test[i]);
        for (let j = 1; j <= wordArray.indexOf(test[i]); j++) {
          wordArray[wordArray.indexOf(test[i]) - j] = 0;
          console.log(wordArray);
          
        }
      }

      if (count === 10 && checker(mapper)) {
        output.push('YES');
      } else {
        output.push('NO');

      }
    }
  })
  return output.map(s => console.log(s))
}
var result = hackerrankInString(['rhackerank']);