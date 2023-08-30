
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
let a = [];

for ( let i = 0; i <n ; i++){
    a[i]= parseInt(readLine());
}
let inc = true;
let dec = true;
 for (let i = 1; i <n; i++){
    if (a[i]>a[i-1]){
        dec =false;
    } else if (a[i]<a[i-1]){
        inc = false;
    }
 }
 let res = inc || dec;
 if (res == true){
    console.log(1)
 } else {
    console.log(0);
 }