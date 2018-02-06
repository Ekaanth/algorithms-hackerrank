process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function angryProfessor(k, a) {
  lateCount = 0;
  a.map(student => {
    if(student > 0){
      lateCount++;
    }
  })
  // console.log(lateCount);
  
  if((a.length - lateCount) < k){
    console.log('lateCount', lateCount, k);
    
    return 'YES'
  }else{
    console.log('lateCount', lateCount, k);
    return 'NO'
  }
  
}
// console.log(angryProfessor(7, [26, 94, -95, 34, 67, -97, 17, 52, 1, 86]));

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);
        var result = angryProfessor(k, a);
        process.stdout.write("" + result + "\n");
    }

}
