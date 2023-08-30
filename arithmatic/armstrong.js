let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let number = parseInt(readLine());
let sum =0;
let num = number;
while (num>0){
    let r = num%10;
    sum = sum +(r**3);
    num = parseInt(num/10);
}
if (sum == number){
    console.log("yes");
}else {
    console.log("No");
}