let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
 }


function binomialCoefficient(r,n){
    if(r<=0|| n===r){
        return 1;
        } else {
            return binomialCoefficient(r-1,n-1)+binomialCoefficient(r,n-1)
        }
}

let num = parseInt(readLine());
for(i = 0; i<num;i++){
    let elemnts = readLine().split(" ");
    let r = parseInt(elemnts[0])
    let n = parseInt(elemnts[1])
    console.log(binomialCoefficient(n,r))
}
