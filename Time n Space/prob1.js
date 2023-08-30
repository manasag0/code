let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let a = readLine().split(" ")
for (let i = 0;  i<a.length;i++){
}
let output =[];
// for (let i = a.length-1;i>=0; i--){
//     output.push(parseInt(a[i]))
// }

// for(let i =0; i<a.length;i++){
//     output.unshift(parseInt( a[i]))
// }

for (let left = 0,right=a.length-1;left<right;left++,right--){
    let temp = a[left];
    a[left] = a[right]
    a[right]= temp
    console.log(parseInt(temp))
}
// console.log(parseInt(output))