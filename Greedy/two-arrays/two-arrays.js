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

function generatePermutations(array) {
  let result = [];
  for (let i = 0; i < array.length; i = i + 1) {
    let rest = generatePermutations(
      array.slice(0, i).concat(array.slice(i + 1))
    );
    if (!rest.length) {
      result.push([array[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        result.push([array[i]].concat(rest[j]));
      }
    }
  }
  return result;
}
function twoArrays(k, A, B) {
  aCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 1) {
      aCount++;
    }
  }
  console.log(aCount, A.length - 1);

  if (aCount >= A.length - 1) {
    permsA = generatePermutations(A);
    permsB = generatePermutations(B);
    count = 0;
    permsA.forEach(aI => {
      permsB.forEach(bI => {
        for (let i = 0; i < Math.max(permsA.length, permsB.length); i++) {
          if (aI[i] + bI[i] >= k) {
            count++;
            break;
          }
        }
      });
    });
    console.log(count);

    if (count === A.length) {
      return 'YES';
    } else {
      return 'NO';
    }
  }
  //   console.log(permsA);
  //   console.log(permsB);
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
