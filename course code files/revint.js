let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

let n = parseInt(readLine());
let x = Math.abs(n);
let y = 0;
let m = 0;
while (x>0){
    y =y * 10+ (x%10);
    x = Math.floor(x/10);
     m = Math.sign(n)*y;
}
console.log(m);