let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let  arr = readLine().split(" ");
let N = arr[0];
let K = arr[1];

let a = parseInt(readLine());
for (let i =0; i<= a; i++){
  if (1<=K && K<=N){
    console.log(a[i]+N)
  }
}

