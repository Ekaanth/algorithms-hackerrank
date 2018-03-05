function minimumNumber(n, password) {
  pass = password.split('');
  specialCharacters = '!@#$%^&*()-+';
  const hasDigit = char => !isNaN(parseInt(char) && Number.isFinite(char));
  const hasLowerCase = char =>
    char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 97;
  const hasUpperCase = char =>
    char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;

  if (password.length < 6) {
    if (pass.filter(hasDigit).length === pass.length) {
      return 6 - password.length + 1;
    } else {
      return 6 - password.length;
    }
  }
  if (!pass.filter(hasDigit).length > 0) {
    return 1;
  }
  if (!pass.filter(hasLowerCase).length > 0) {
    return 1;
  }
  if (!pass.filter(hasUpperCase).length > 0) {
    return 1;
  }
  if (!pass.includes(specialCharacters)) {
    return 1;
  }
}
console.log(minimumNumber(3, 'Ab1'));
