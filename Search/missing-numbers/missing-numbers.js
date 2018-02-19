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

function missingNumbers(arr, brr) {
  tempA = arr.slice(0).sort();
  tempB = brr.slice(0).sort();
  max = Math.max(tempA[tempA.length - 1], tempB[tempB.length - 1]);
  hashArray = new Array(max + 10).fill(0);
  arr.forEach(element => {
    hashArray[element] += 1;
  });
  brr.forEach(element => {
    hashArray[element] -= 1;
  });
  const result = [];
  for (let i = 0; i < hashArray.length - 1; i++) {
    if (hashArray[i] != 0) {
      result.push(i);
    }
  }

  return [...result];
}

function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  var m = parseInt(readLine());
  brr = readLine().split(' ');
  brr = brr.map(Number);
  var result = missingNumbers(arr, brr);
  console.log(result.join(' '));
}
