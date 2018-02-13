process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split('\n');
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function makingAnagrams(s1, s2) {
  strings = [s1.split(''), s2.split('')];
  common = strings.shift().filter(i => {
    return strings.every(element => {
      return element.indexOf(i) !== -1;
    });
  });
  l1 = s1.split('').length;
  l2 = s2.split('').length;
  console.log(l1);
  console.log(l2);
  console.log(common.length);

  return (
    s1.split('').length - common.length + s2.split('').length - common.length
  );
}

function main() {
  var s1 = readLine();
  var s2 = readLine();
  var result = makingAnagrams(s1, s2);
  process.stdout.write('' + result + '\n');
}
