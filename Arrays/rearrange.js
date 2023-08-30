const { trace } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
let num = [];
for(let i = 0;i<n;i++){
    num[i] = parseInt(readLine())
}
let indices = [];

for(let i = 0;i<n;i++){
    indices[i] = parseInt(readLine());
}
let taget = [];

for(let i = 0;i<n;i++){
   if(indices[i]>=taget.length){
    // taget.push(num[i])
    taget = taget.concat(num[i])
   }
}