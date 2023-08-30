let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function serice(n){
    if(n===1){
        return 1;
    }
    let p = 1; 
    for(let i=((n*(n-1))/2)+1;i<=(n*(n+1))/2;i++){
        p*=i

    }
    return p+serice(n-1)
}

let num = parseInt(readLine())

for(let i =0;i<num;i++){
    let n = parseInt(readLine())
    console.log(serice(n))
}