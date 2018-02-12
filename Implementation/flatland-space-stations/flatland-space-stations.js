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

function flatlandSpaceStations(n, c) {
  cities = new Array(n).fill(0);
  distanceArray = [];
  c.forEach(i => {
    cities[i] = 1;
  });
  if (n === c.length) {
    return 0;
  }
  for (let j = 0; j < cities.length; j++) {
    prevIndex = j - 1;
    nextIndex = j + 1;
    while (cities[prevIndex] == 1 || cities[nextIndex] == 1) {
      distanceArray.push(Math.min(j - prevIndex, j - nextIndex));
      prevIndex = prevIndex - 1;
      nextIndex = nextIndex + 1;
    }
  }
  return Math.abs(Math.max(...distanceArray)) + 1;
}

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var m = parseInt(n_temp[1]);
  c = readLine().split(' ');
  c = c.map(Number);
  var result = flatlandSpaceStations(n, c);
  process.stdout.write('' + result + '\n');
}
