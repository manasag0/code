let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n = parseInt(readLine());
let a = [];

for (let i = 0; i <n; i++){
    a = parseInt(readLine());
}
let min = a[0];
for (let i = 1; i<n; i++){
    if (a[i]<min){
        min =a[i];
    }
}
    let digitsum =0;
    while (min >0){
        digitsum = digitsum + min %10;
        min = Math.floor(min/10);
    }
  
    if (digitsum%2 ===0){
        console.log(1);
    } else {
        console.log(0);
    }