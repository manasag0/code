let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
let sum = 0;

for (let i = 1; i<=n; i++){
    let m = parseInt(readLine());
    if (i%2 ===0 ){
        sum -= m;
    } else {
        sum += m;
    }
}
console.log(sum);