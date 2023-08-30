let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
// reading lenght of line
let n = parseInt(readLine());
let j = parseInt(readLine());
let count = 1;

for (let i = 1; i<=n-1; i++){
    let sqn = parseInt(readLine());
    if(sqn === j){
        count = count +1;
        
    }
}
console.log(count);