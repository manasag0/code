let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// number of arrays
let n = parseInt(readLine());
// an eampty array to initialise 
let a = [];
// pushing rest of elements using loop
for (let i = 0; i < n; i++){
    a.push(parseInt(readLine()));
}
// 0console.log(a);
