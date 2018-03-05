var matchedWords = [];
function passwordCracker(pass, attempt, words = []) {
  for (let i = 1; i <= attempt.length + 1; i++) {
    for (let j = 0; j < attempt.length - i; j++) {
      current = attempt.slice(j, j + i + 1);
      console.log(current);

      if (pass.includes(current)) {
        wordsList = words.concat([current]);
        if (i > pass.length) {
          passwordCracker(current, attempt, wordsList);
        } else matchedWords.push(wordsList);
      }
    }
  }
}

// passwordCracker(['ab', 'abcd', 'cd'], 'abcd');
passwordCracker(['hello', 'planet'], 'helloworld');
console.log(matchedWords ? matchedWords : 'WRONG PASSWORD');
