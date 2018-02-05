function marsExploration(s) {
  messageCount = s.length / 3;
  affectedMessageCount = 0;
  str = s.split('');
  for (let i = 1; i < str.length; i+=3) {
      if(str[i - 1] !== 'S'){
        affectedMessageCount+=1;
      }
      if(str[i] !== 'O'){
        affectedMessageCount+=1;
      }
      if(str[i + 1] !== 'S'){
        affectedMessageCount+=1;
      }
  }
  return affectedMessageCount;
}
console.log(marsExploration('QQQ'));
