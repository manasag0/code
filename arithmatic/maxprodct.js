let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine()); //4
let a = []; // empty for now;

for ( i= 0; i < n; i++){
  let m = parseInt(readLine());
  a.push(m);
  // console.log(m);
}
// console.log(a);

let maxProduct = a[0]*a[1];
for (let i =1;i<n; i++){
  let pair = [a[i],a[i-1]]; // 1*3 = 3, 3*4 =12, 4*10= 40
  // console.log(pair);
  let product = pair[0]*pair[1];
  if(product>maxProduct){
   maxProduct=product;
   }
  
  // console.log(product);
  
}
console.log(maxProduct);