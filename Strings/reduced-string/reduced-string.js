function super_reduced_string(s){
  const temp = s.split('');
  const stringArray = temp.slice();
  for (let i = 0; i < temp.length; i++) {
      current = temp[i];
      next = temp[i + 1];
      console.log('current:', current);
      console.log('next:', next);
      
    if( temp[i] === next){
      stringArray[i] = '0';
      stringArray[i + 1] = '0';
      i++;
      console.log('Temp after pop:', stringArray);
    }
  }
  console.log('Final:', stringArray);
}
super_reduced_string('aaabccddd');