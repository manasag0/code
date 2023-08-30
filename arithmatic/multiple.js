let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let N = parseInt(readLine());
let num = 2;
while (num%N !==0){ 
    //  console.log(num%N);
    num = num+2;
    // console.log(num);
    // console.log(num+2);
}
// console.log(num);
