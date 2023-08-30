let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = readLine().split(" ");
let C = parseInt(n[0]);
let K = parseInt(n[1]);

if (C%K ==0){
    console.log(0);
} else {
    console.log(1);
}