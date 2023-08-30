let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
// let n = 5;
// let a =[1 ,-5, -4, 3 ,0];
// let sum = 0;
// for (i =0; i<n;i++){
// if (a[i]<0){
//     sum++;
// }
// }
// console.log(sum);

let n = parseInt(readLine());
let m = readLine().split(" ");
let sum = 0;
for(let i = 0; i<n; i++){

if (parseInt(m[i])<0){
    sum++;
}

}
console.log(sum);