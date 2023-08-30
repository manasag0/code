let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
if (n==0){
    console.log(0);
}
if(n<3){
    console.log(1);
}
let t1= 0;
let t2= 1;
let t3= 1;
let ans =0;
for (let i = 3; i<=n; i++){
    ans = t1+t2+t3;
    t1 = t2;
    t2 = t3;
    t3 = ans;
}
console.log(ans);