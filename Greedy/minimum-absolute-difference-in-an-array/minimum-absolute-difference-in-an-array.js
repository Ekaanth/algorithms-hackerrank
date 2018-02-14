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

function minimumAbsoluteDifference(n, arr) {
  minArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      minArray.push(Math.abs(arr[i] - arr[j]));
    }
  }
  if (arr.length !== new Set(arr.size) && minArray.length === 0) {
    return 0;
  } else {
    return Math.min(...minArray);
  }
}

function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  var result = minimumAbsoluteDifference(n, arr);
  process.stdout.write('' + result + '\n');
}
