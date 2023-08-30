let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

let n = parseInt(readLine());
 let reversed = 0;
if (n>0){
    let p = n % 10;
    n = Math.floor(n/10);
    reversed = reversed*10 + p;
    
}
console.log(reversed);