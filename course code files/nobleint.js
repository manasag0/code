/*
let a = ['a','b','c','d','e'];
let b = [1, 2, 3, 4, 5];

for (let i =0; i<a.length;i++) {
    for (let j =0; j<b.length; j++){
 console.log(b[j]+a[i]);
    }

how to write to get 1a 2b 3c 4d 5e
*/
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let a = [];
let counter = 0;
for (let i = 0; i< n; i++){
    a[i]= parseInt(readLine()); // a = [3, 2, 1, 3]
}
// console.log(a)
for (let j = 0; j <n ; j++){ // j++ 0<3=>, 0<2 =>, 0<1 =>, 0<3
    let count = 0;
     {
        for (let k = 0 ; k< n; k++){ 
            if (arr[j]<arr[k]){ // arr[k] = 3
                count +=1;
            }
            else {
                count = count;
            }
        }
    }
}