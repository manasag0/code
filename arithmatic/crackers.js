let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let num = readLine().split(" ");
let N = parseInt(num[0]);
let K = parseInt(num[1]);
let M = N%K;
// console.log(M);
if (M===0){
    console.log(0);
}else {
    console.log(1);
}