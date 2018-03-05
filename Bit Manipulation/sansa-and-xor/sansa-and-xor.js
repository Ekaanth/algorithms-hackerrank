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

function sansaXor(arr) {
  subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let ar = [];
      for (let k = i; k <= j; k++) {
        ar.push(arr[k]);
      }
      subs.push(ar);
    }
  }
  xorArray = [];
  subs.forEach(element => {
    const xor = element.reduce((a, b) => a ^ b, 0);
    xorArray.push(xor);
  });

  return xorArray.reduce((a, b) => a ^ b, 0);
}

function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = sansaXor(arr);
    process.stdout.write('' + result + '\n');
  }
}

// sansaXor([4, 5, 7, 5]);
// sansaXor([1, 2, 3]);
