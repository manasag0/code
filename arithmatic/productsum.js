let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = readLine();
let a = [];
for (let i = 0; i<n.length;i++){
    a.push(parseInt(n[i]));
    // console.log(a);
}
let sum =0;
let product = 1;
for (let j =0; j<a.length;j++){
    sum = sum+a[j];
    // console.log(a[j]);
    
    product = product*a[j];
    // console.log(product)
    // console.log(sum);
}
console.log(product-sum);