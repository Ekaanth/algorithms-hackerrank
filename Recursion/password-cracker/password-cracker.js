function passwordCracker(pass, attempt) {
  for (let i = 0; i <= attempt.length + 1; i++) {
    console.log(attempt.slice(i, i + 2));
    if (pass.includes(attempt.slice(i, i + 2))) {
      console.log(
        attempt.split('').slice(i, i + 2),
        pass.includes(attempt.slice(i, i + 2))
      );
    }
  }
}
passwordCracker(
  ['because', 'can', 'do', 'must', 'we', 'what'],
  'wedowhatwemustbecausewecan'
);
