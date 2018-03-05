function generateSubArrays(arr) {
  subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let ar = [];
      for (let k = i; k <= j; k++) {
        ar.push(arr[k]);
      }
      const isUniform = x => x === ar[0];
      if (ar.every(isUniform)) {
        subs.push(ar);
      }
    }
  }
  return subs;
}
function getStringWeight(s, x) {
  alpha = '0abcdefghijklmnopqrstuvwxyz'.split('');
  sub = generateSubArrays(s.split(''));
  const subValue = sub.map(arr => {
    if (arr.length === 1) {
      return alpha.indexOf(arr[0]);
    } else {
      return alpha.indexOf(arr[0]) * arr.length;
    }
  });

  return subValue.includes(x) ? 'Yes' : 'No';
}
console.log(getStringWeight('abccddde', 6));
