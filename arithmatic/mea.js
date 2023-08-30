let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = readLine();
let m = readLine().split(" ");
let sum = 0;
for (let i =0; i<m.length;i++){
    m[i]=parseInt(m[i]);
    sum = sum+m[i];
}
let man = sum/n;
console.log(Math.floor(man));