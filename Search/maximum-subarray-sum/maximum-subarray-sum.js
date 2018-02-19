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

function generateSubArrays(arr) {
  return arr;
}
function maximumSum(a, m) {
  modValues = [];
  subArrays = generateSubArrays(a);
  console.log(subArrays);

  //   subArrays.map(arr => {
  //     if (arr.length === 1) {
  //       modValues.push(arr[0] % m);
  //     } else {
  //       let sum = (a, b) => a + b;
  //       total = arr.reduce(sum);
  //       modValues.push(total % m);
  //     }
  //   });
  return Math.max(...modValues);
}

function main() {
  var q = parseInt(readLine());
  for (var a0 = 0; a0 < q; a0++) {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    var result = maximumSum(a, m);
    process.stdout.write('' + result + '\n');
  }
}
