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

function libraryFine(d1, m1, y1, d2, m2, y2) {
  days = dateDifference(d1, m1, y1, d2, m2, y2, 0);
  if (days > 0) return 0;
  if (days < 0 && Math.abs(days) < 30) return Math.abs(days) * 15;
  if (days < 0 && Math.abs(days) > 30) return Math.abs(days) * 500;
  if (days < 0 && Math.abs(days) > 365) return 10000;
}
function dateDifference(d1, m1, y1, d2, m2, y2, days) {
  if (m1 == m2 && y1 == y2) return days + d2 - d1;
  days = days + 30 - d1 + 1;
  d1 = 1;
  m1 == 12 ? ((m1 = 1), y1++) : m1++;
  return dateDifference(d1, m1, y1, d2, m2, y2, days);
}

const getDaysInMonth = (month, year) =>
  month == 2
    ? isLeapYear(year) ? 29 : 28
    : [4, 6, 9, 11].includes(month) ? 30 : 31;
const isLeapYear = year =>
  year % 100 == 0 ? year % 400 === 0 : year % 4 === 0;

function main() {
  var d1_temp = readLine().split(' ');
  var d1 = parseInt(d1_temp[0]);
  var m1 = parseInt(d1_temp[1]);
  var y1 = parseInt(d1_temp[2]);
  var d2_temp = readLine().split(' ');
  var d2 = parseInt(d2_temp[0]);
  var m2 = parseInt(d2_temp[1]);
  var y2 = parseInt(d2_temp[2]);
  var result = libraryFine(d1, m1, y1, d2, m2, y2);
  process.stdout.write('' + result + '\n');
}
