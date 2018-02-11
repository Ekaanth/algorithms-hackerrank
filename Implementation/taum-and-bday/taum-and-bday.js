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

function taumBday(b, w, x, y, z) {
  if ((x == y && y == z) || (x < z && y < z)) {
    return b * x + w * y;
  }
  if (x > y && x > z) {
    let costs = [];
    let whiteToBlackCost = y + z;
    c1 = b * whiteToBlackCost + w * y;
    c2 = b * x + w * y;
    costs.push(c1, c2);
    return Math.min(...costs);
  }
  if (y > x && y > z) {
    let costs = [];
    let blackToWhiteCost = x + z;
    c1 = b * x + w * blackToWhiteCost;
    c2 = b * x + w * y;
    costs.push(c1, c2);
    return Math.min(...costs);
  }
}

function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var b_temp = readLine().split(' ');
    var b = parseInt(b_temp[0]);
    var w = parseInt(b_temp[1]);
    var x_temp = readLine().split(' ');
    var x = parseInt(x_temp[0]);
    var y = parseInt(x_temp[1]);
    var z = parseInt(x_temp[2]);
    var result = taumBday(b, w, x, y, z);
    process.stdout.write('' + result + '\n');
  }
}
