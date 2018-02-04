function countingSort4(arr) {
  for (let i = 0; i < (arr.length) / 2; i++) {
 arr[i][1] = '-';
}
for (let i = 0; i < arr.length; i++) {
 arr[i][2] = i;
}

let compareNumbers = (a, b) => {
 if (a[0] === b[0]) {
   return a[2] - b[2];
 }
 return a[0] - b[0];
}
arr.sort(compareNumbers)

let strings = arr.map(d => d[1])
return [...strings];
}


function main() {
   var arr = [];
   var n = parseInt(readLine());
   for(var a0 = 0; a0 < n; a0++){
       var x_temp = readLine().split(' ');
       var x = parseInt(x_temp[0]);
       var s = x_temp[1];
       arr.push(x_temp)
   }
   var result = countingSort4(arr);
   console.log(result.join(" "));
}