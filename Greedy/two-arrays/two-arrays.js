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
function generatePermutations(k, A, B) {
  const ascend = (a, b) => a - b;
  const descend = (a, b) => b - a;
  sortedA = A.sort(ascend);
  sortedB = B.sort(descend);
  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] + sortedB[i] < k) {
      return false;
    }
  }
  return true;
}
function twoArrays(k, A, B) {
  if (generatePermutations(k, A, B)) {
    return 'YES';
  } else {
    return 'NO';
  }
}

function main() {
  var q = parseInt(readLine());
  for (var a0 = 0; a0 < q; a0++) {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    A = readLine().split(' ');
    A = A.map(Number);
    B = readLine().split(' ');
    B = B.map(Number);
    var result = twoArrays(k, A, B);
    process.stdout.write('' + result + '\n');
  }
}
