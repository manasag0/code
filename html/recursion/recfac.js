let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function factRec(n){
    if(n<0){
        return "undefined";
    } if(n<=1){
       return 1;
    }
    return n*factRec(n-1)
}
let n = parseInt(readLine())
console.log(factRec(n))