let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = readLine().split(" ");

let count =0;
for  (let i = 0; i<n.length;i++){
    for(let j = 0; j<n.length;j++){
        if(i< j && n[i]==n[j]){
            count++;
        }
    }
}
console.log(count)