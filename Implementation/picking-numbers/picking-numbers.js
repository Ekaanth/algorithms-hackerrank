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

function pickingNumbers(a) {
  countedNumbers = a.reduce((allNumbers, num) => {
    if (num in allNumbers) {
      allNumbers[num]++;
    } else {
      allNumbers[num] = 1;
    }
    return allNumbers;
  }, {});
  countedKeys = Object.keys(countedNumbers);
  selectedKeys = [];
  for (let i = 0; i < countedKeys.length - 1; i++) {
    if (countedKeys[i + 1] - countedKeys[i] == 1) {
      selectedKeys.push(
        countedNumbers[countedKeys[i]] + countedNumbers[countedKeys[i + 1]]
      );
    }
  }
  values = [];
  for (key in countedNumbers) {
    if (countedNumbers.hasOwnProperty(key)) {
      var value = countedNumbers[key];
      values.push(value);
    }
  }
  //   console.log(selectedKeys);

  keysAndMostFrequency = selectedKeys.concat(values);
  //   console.log(keysAndMostFrequency);
  return Math.max(...keysAndMostFrequency);
}
function main() {
  var n = parseInt(readLine());
  a = readLine().split(' ');
  a = a.map(Number);
  var result = pickingNumbers(a);
  process.stdout.write('' + result + '\n');
}
