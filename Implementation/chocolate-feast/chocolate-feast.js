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

collectedWrappers = 0;
function chocolateFeast(n, c, m) {
  chocosBought = Math.trunc(n / c);
  total = chocosBought;
  wrappersExchange = Math.trunc(chocosBought / m);
  if (wrappersExchange !== 0) {
    remainingWrappers = Math.round(chocosBought % m);
    collectedWrappers += remainingWrappers;
  }

  if (wrappersExchange > 0) {
    total = chocosBought + wrappersExchange;
  }
  //   console.log('collectedWrappers', collectedWrappers);

  if (collectedWrappers >= 1) {
    promo = Math.trunc(collectedWrappers);
    console.log(promo);
    if (promo !== 33) {
      total += promo;
    }
    collectedWrappers -= promo;
  }

  return total;
}
// chocolateFeast(10, 2, 5);
// chocolateFeast(12, 4, 4);
// chocolateFeast(6, 2, 2);
function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var c = parseInt(n_temp[1]);
    var m = parseInt(n_temp[2]);
    var result = chocolateFeast(n, c, m);
    process.stdout.write('' + result + '\n');
  }
}
